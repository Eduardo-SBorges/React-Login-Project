import * as React from 'react';
import { render } from '@testing-library/react';
import Button from "../components/Button";
import '@testing-library/jest-dom'

describe("This component must have a text 'Continuar'", () => {

    test('', () => {
        const b = render(<Button />);
        expect(b.getByText('Continuar')).toBeInTheDocument();
    });

    test("This component must have CSS's styles.", () => {
        const b = render(<Button />);
        expect(b.getByRole('button')).toHaveStyle({
        color: "white",
        borderRadius: "50px",
        border: "none",
        background: "linear-gradient(90deg, #FF2D04 0%, #C13216 100%)",
        padding: "5px 0",
        width: "50.5%"
    });

})


});


