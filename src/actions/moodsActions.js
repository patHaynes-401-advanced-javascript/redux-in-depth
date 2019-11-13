export const DRINK_COFFEE = 'DRINK_COFFEE';
export const updateCoffee = mood => ({
  type: DRINK_COFFEE,
  payload: mood
});

export const EAT_SNACKS = 'EAT_SNACKS';
export const updateSnack = mood => ({
  type: EAT_SNACKS,
  payload: mood
});

export const TAKE_NAP = 'TAKE_NAP';
export const updateNap = mood => ({
  type: TAKE_NAP,
  payload: mood
});

export const STUDY = 'STUDY';
export const updateStudy = mood => ({
  type: STUDY,
  payload: mood
});

export const RESET = 'RESET';
export const updateReset = mood => ({
  type: RESET,
  payload: mood
});
