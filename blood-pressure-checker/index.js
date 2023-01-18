/**
 * Blood Pressure
 * normal = Blood pressure >= 80 mmHg - 120 mmHg Systolic and Diastolic < 80 mmHg
 * above-normal = Blood pressure >= 120 mmHg - 130 mmHg Systolic and Diastolic < 80 mmHg
 * hypertension = Blood pressure >= 130 mmHg - 140 mmHg Syntolic and Diastolic > 80 mmHg
 */

function classifyBloodPressure(systolic, diastolic) {
  if (systolic >= 80 && systolic < 120 && diastolic < 80) {
    return "normal";
  } else if (systolic >= 120 && systolic < 130 && diastolic < 80) {
    return "above-normal";
  } else if (systolic >= 130 && diastolic >= 80) {
    return "hypertension";
  } else {
    return null;
  }
}

function runApp() {
  const systolic = Number(prompt("What' your blood pressure systolic?"));
  const diastolic = Number(prompt("What' your blood pressure diastolic?"));

  const result = classifyBloodPressure(systolic, diastolic);

  if (result === "normal") {
    alert("Your blood pressure is normal");
  } else if (result === "above-normal") {
    alert(
      "Your blood pressure is above normal and almost close to hypertension!"
    );
  } else if (result === "hypertension") {
    alert("You have hypertension :(");
  } else {
    alert("You probably need to see a doctor immediately");
  }
}

runApp();
