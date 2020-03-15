export const requiredField = value => {
    return value !== undefined
        ? undefined
        : "insert something here";
};

export const maxLengthCreator = (maxLength) => (value) => {
    return value && value.length > maxLength
        ? `field must be less than ${maxLength} symbols`
        : undefined;
};