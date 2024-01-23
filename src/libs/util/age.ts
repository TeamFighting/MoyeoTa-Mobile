export const ages = (age: string) => {
  if (age == "10-19") return 10;
  if (age == "20-29") return 20;
  if (age == "30-39") return 30;
  if (age == "40-49") return 40;
  if (age == "50-59") return 50;
  if (age == "60-69") return 60;
  if (age == "70-79") return 70;
  if (age == "80-89") return 80;
  if (age == "90-99") return 90;
};

export const selectAge = (age: number) => {
  if (10 <= age && age <= 19) return "10대";
  if (20 <= age && age <= 29) return "20대";
  if (30 <= age && age <= 39) return "30대";
  if (40 <= age && age <= 49) return "40대";
  if (50 <= age && age <= 59) return "50대";
  if (60 <= age && age <= 69) return "60대";
  if (70 <= age && age <= 79) return "70대";
  if (80 <= age && age <= 89) return "80대";
  if (90 <= age && age <= 99) return "90대";
};
