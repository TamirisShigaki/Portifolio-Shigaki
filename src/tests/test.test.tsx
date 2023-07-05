import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Teste", () => {
	it("teste1", ()=> {
		render(<App/>);

		const title = screen.getByRole('heading', {level: 1});
		expect(title).toBeDefined();
	})
})
