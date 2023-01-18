// bps: bloodPressureSystolic
// bpd: bloodPressureDiastolic

const bloodPressureSystolic = prompt(
  "What was your blood pressure when you last checked? (systolic)"
);

if (bloodPressureSystolic >= 80 && bloodPressureSystolic < 120) {
  console.log("Your blood pressure is normal");
} else if (bloodPressureSystolic >= 120 && bloodPressureSystolic < 130) {
  console.log("Your blood pressure is up and almost close to hypertension!");
} else if (bloodPressureSystolic >= 130) {
  console.log("You have hypertension :(");
} else {
  console.log("You probably need to see a doctor immediately");
}
