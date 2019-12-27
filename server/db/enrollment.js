const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const { DEFAULT_OPTIONS } = require('./common');
const User = require('./user');
const Course = require('./course');
const { error404 } = require('../core/util');

const PAYMENT_TYPES = {
  STRIPE: 'stripe',
  PAYPAL: 'paypal'
};

const PAYMENT = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    earnings: Number,
    type: { type: String, required: true, enum: Object.values(PAYMENT_TYPES) },
    thirdPartyId: { type: String, required: true, index: true },
    description: String,
    affiliate: String,
    created: Date
  },
  DEFAULT_OPTIONS
);

const ENROLLMENT = new mongoose.Schema(
  {
    user: { type: ObjectId, ref: 'user', required: true },
    course: { type: ObjectId, ref: 'course', required: true },
    pricingPlan: { type: ObjectId, ref: 'pricing-plan' },
    competed: [ObjectId],
    payments: [PAYMENT],
    deleted: { type: Boolean, default: false },
    created: Date,
    deletedAt: Date
  },
  DEFAULT_OPTIONS
);

ENROLLMENT.statics.enroll = async args => {
  const { user: _user, course: _course, payment } = args;
  const [user, course] = await Promise.all([User.findById(_user), Course.findById(_course)]);
  if (!user) {
    throw error404({ user }, _user);
  } else if (!course) {
    throw error404({ course }, _course);
  }
  const enrollment = new Enrollment({ ...args, created: new Date() });
  if (payment) {
    enrollment.payments.push(payment);
  }
  await user.addEnrollment(enrollment._id.toString());
  return enrollment.save();
};

ENROLLMENT.methods.addCompletedStep = async args => {
  const { step } = args;
  const idx = this.competed.findIndex(i => i.toString() === step.toString());
  if (idx === -1) {
    this.completed.push(step);
    return this.save();
  }
  const error = new Error(`Step ${step} is already completed`);
  error.status = 400;
  throw error;
};

ENROLLMENT.methods.delete = async function delete_() {
  const user = await User.findById(this.user);
  if (!user) throw error404({ user }, this.user);
  this.deleted = true;
  this.deletedAt = new Date();
  await user.discardEnrollment(this._id);
  return this.save();
};

const Enrollment = mongoose.model('enrollment', ENROLLMENT);

module.exports = Enrollment;
