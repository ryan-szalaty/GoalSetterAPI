const asyncHandler = require('express-async-handler');

const Goal = require('../model/goalModel');
const User = require('../model/userModel');

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id});
    res.status(200).json({goals: goals});
});

const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field.');
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    });
    res.status(200).json({message: `Goal created: ${goal}`});
});

const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found. Please check the ID.');
    };
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('Unauthorized');
    }
    if (goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error('Unauthorized');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json({message: `Goal updated: ${updatedGoal}`});
});

const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found. Please check the ID.');
    };
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('Unauthorized');
    }
    if (goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error('Unauthorized');
    }
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({message: `Deleted goal ${deletedGoal}`});
    console.log('Goal deleted.'.red.underline);
});

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}