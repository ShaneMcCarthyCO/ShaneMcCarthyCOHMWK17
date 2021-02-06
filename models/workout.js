const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default:()=> new Date()},
  exercises: [
    {
      type: {
        type: String,
        required: "Enter the type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
      },
      duration: {
        type: Number,
        required: "Enter an exercise in duration"
      },
      weight: {
        type: Number,
      
      },
      reps: {
        type: Number,
        
      },
      sets: {
        type: Number,
        
      },
      
    distance: {
      type: Number,
    
    }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;