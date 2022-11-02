import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: 'Facebook',
    icon: iconStyle(FaFacebook),
    href: 'https://www.facebook.com/quickfundresults',
  },
  {
    name: 'Instagram',
    icon: iconStyle(FaInstagram),
    href: 'https://www.instagram.com/quickfundresults/',
  },
  {
    name: 'YouTube',
    icon: iconStyle(FaYoutube),
  },
  {
    name: 'Twitter',
    icon: iconStyle(FaTwitter),
    href: 'https://twitter.com/quickfundresult',
  },
  {
    name: 'LinkedIn',
    icon: iconStyle(FaLinkedin),
  },
];

export const footerData = [
  {
    title: 'Main',
    links: ['Blog', 'FAQs', 'Support', 'About us'],
  },
  {
    title: 'Product',
    links: ['Login', 'Personal', 'Business', 'Team'],
  },
  {
    title: 'Press',
    links: ['Logos', 'Events', 'Stories', 'Office'],
  },
  {
    title: 'Legal',
    links: [
      'GDPR',
      'Privacy Policy',
      'Terms of Service',
      'Disclaimer',
    ],
  },
];
