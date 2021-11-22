import * as React from 'react';
import CurrentTime from '../components/CurrentTime';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[CurrentTime's Component] must be in the document.", () => {
  const component = render(<CurrentTime />);

  test('This must be in the document.', () => {
    expect(
      component.getByTestId('test-CurrentTime-component'),
    ).toBeInTheDocument();
  });

  test('This must show the current time.', () => {
    render(<CurrentTime />);

    const newDate = new Date();

    const hours = newDate.getHours();
    const minutes = newDate.getUTCMinutes();
    const time = `${hours < 10 ? '0' : ''}${hours}:${minutes}`;

    expect(screen.getByText(time)).toBeInTheDocument();
  });

  test('This must show the current date.', () => {
    render(<CurrentTime />);

    const newDate = new Date();

    const day = newDate.getDate();
    let week = newDate.getDay() - 1;

    switch (week) {
      case 0:
        week = 'segunda-feira';
        break;
      case 1:
        week = 'terça-feira';
        break;
      case 2:
        week = 'quarta-feira';
        break;
      case 3:
        week = 'quinta-feira';
        break;
      case 4:
        week = 'sexta-feira';
        break;
      case 5:
        week = 'sábado';
        break;
      case 6:
        week = 'domingo';
        break;
      default:
    }

    let month = newDate.getMonth();

    switch (month) {
      case 0:
        month = 'Janeiro';
        break;
      case 1:
        month = 'Fevereiro';
        break;
      case 2:
        month = 'Março';
        break;
      case 3:
        month = 'Abril';
        break;
      case 4:
        month = 'Maio';
        break;
      case 5:
        month = 'Junho';
        break;
      case 6:
        month = 'Julho';
        break;
      case 7:
        month = 'Agosto';
        break;
      case 8:
        month = 'Setembro';
        break;
      case 9:
        month = 'Outubro';
        break;
      case 10:
        month = 'Novembro';
        break;
      case 11:
        month = 'Dezembro';
        break;
      default:
    }

    const year = newDate.getFullYear();

    const date = `${week}, ${day} de ${month} de ${year}`;

    expect(screen.getByText(date)).toBeInTheDocument();
  });

  test("This must have CSS's styles.", () => {
    const component = render(<CurrentTime />);

    expect(component.getByTestId('test-CurrentTime-component')).toHaveStyle({
      textAlign: 'center',
    });
  });
});
