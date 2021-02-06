const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, required: true },
  exercises: [
    {
      type: {
        type: String
        required: "Enter the type of exercise"
      },
      name: {
        type: String
        trim: true,
        required: "Enter a name for the exercise"
      },
      duration: {
        type: Number
        required: "Enter an exercise in duration"
      },
      weight: {
        type: Number
        required: "Enter a body weight"
      },
      reps: {
        type: Number
        required: "Enter the number of reps"
      },
      sets: {
        type: Number
        required: "Enter the number of sets"
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;