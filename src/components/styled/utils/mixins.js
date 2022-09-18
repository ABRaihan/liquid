const font = (size, weight, color) => `
        ${size ? `font-size: ${size}` : ''};
        ${weight ? `font-weight: ${weight}` : ''};
        ${color ? `color: ${color}` : ''};`;
export default font;
