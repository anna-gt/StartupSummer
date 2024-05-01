import { useState } from 'react';
import { Group } from '@mantine/core';
import classes from './Navbar.module.css';
import ArrowFlicksLogo from './../../assets/ArrowFlicks.svg'

const data = [
  { link: '', label: 'Movies', icon: '' },
  { link: '', label: 'Rated movies', icon: '' },
];

export function Navbar() {
  const [active, setActive] = useState('Movies');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="center">
				<img src={ArrowFlicksLogo} alt="" width='32px' height='32px'  />
				ArrowFlicks
        </Group>
        {links}
      </div>
    </nav>
  );
}