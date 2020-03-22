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

export const minLengthCreator = (minLength) => (value) => {
    return value && value.length < minLength
        ? `field must be longer than ${minLength} symbols`
        : undefined;
};