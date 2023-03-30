const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your name.']
  },
  email: {
    type: String,
    required: [true, 'Please add an email.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password.'],
  },
  roles: {
    type: String,
    default: 'Manager'
  },
  tasks: [
    {
      task: {
        type: String,
        required: [true, 'Please add a task.']
      }
    },
  ],
  employees: [
    {
      employeeName: {
        type: String,
        required: [true, 'Please add employee name.']
      },
      startDate: {
        type: String,
        required: [true, 'Please add start date.']
      },
      foodHandler_id: {
        number: {
          type: String,
          required: [true, 'Please add id number.']
        },
        issued_on: {
          type: String,
          required: [true, 'Please add id number.']
        },
        expires_on: {
          type: String,
          required: [true, 'Please add expiration date.']
        } 
      },
      isActive: {
        type: Boolean,
        default: true,
      },
    }
  ],
  locations: [
    {
      shopName: {
        type: String,
        required: [true, 'Please add store name.']
      },
      address: {
        type: String,
        required: [true, 'Please add an address.'],
      },
      
    },
  ],
},
{
  timestamps: true
});

const User = mongoose.model('user', userSchema);
module.exports = User;