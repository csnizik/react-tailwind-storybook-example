import React from 'react';
import classNames from 'classnames';

import './Icon.css';

import { ReactComponent as ArrowDown } from './arrow-down.svg';
import { ReactComponent as ArrowUp } from './arrow-up.svg';
import { ReactComponent as Dashboard } from './dashboard.svg';
import { ReactComponent as Download } from './download.svg';
import { ReactComponent as Graph } from './graph.svg';
import { ReactComponent as MagnifyingGlass } from './magnifying-glass.svg';
import { ReactComponent as Network } from './network.svg';
import { ReactComponent as Pencil } from './pencil.svg';
import { ReactComponent as Pie } from './pie.svg';
import { ReactComponent as Pin } from './pin.svg';
import { ReactComponent as Play } from './play.svg';
import { ReactComponent as Pointer } from './pointer.svg';
import { ReactComponent as SlideLeft } from './slide-left.svg';
import { ReactComponent as SlideRight } from './slide-right.svg';
import { ReactComponent as ThreeDots } from './three-dots-vert.svg';
import { ReactComponent as Triangle } from './triangle.svg';
import { ReactComponent as Video } from './video.svg';

const iconColor = (color) => {
  switch (color) {
    case 'Crystal-Clear Teal':
    case 'teal':
      return 'text-teal';
    case 'Sunny-Sky Blue':
    case 'blue-light':
      return 'text-blue';
    case 'Sunset Pink':
    case 'pink':
      return 'text-pink';
    case 'Sea Foam Teal':
    case 'teal-dark':
      return 'text-teal-dark';
    case 'Navy Sky':
    case 'blue-dark':
      return 'text-blue-dark';
    case 'Moss Green':
    case 'green':
      return 'text-green';
    case 'Dusty Rose':
    case 'red':
      return 'text-red';
    case 'Whitewash White':
    case 'white-dark':
      return 'text-white-dark';
    case 'Black':
    case 'black':
      return 'text-black';
    case 'Gray':
    case 'gray':
      return 'text-gray-500';
    default:
      return '';
  }
};

const iconSize = (size) => {
  switch (size) {
    case 'XSmall':
    case 'xs':
      return 'h-3 w-3';
    case 'Small':
    case 's':
      return 'h-4 w-4';
    case 'Large':
    case 'l':
      return 'h-16 w-16';
    default:
      return 'h-6 w-6';
  }
};

const renderIcon = ({ type, size, color, classes, ...props }) => {
  switch (type) {
    case 'ArrowDown':
      return (
        <ArrowDown
          className={classNames(
            'fill-current',
            iconSize(size),
            color && iconColor(color),
            classes
          )}
        />
      );
    case 'ArrowUp':
      return (
        <ArrowUp
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Dashboard':
      return (
        <Dashboard
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
  
      case 'Download':
        return (
          <Download
            className={classNames(
              'fill-current',
              iconSize(size),
              iconColor(color)
            )}
          />
        );
    case 'Graph':
      return (
        <Graph
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'MagnifyingGlass':
      return (
        <MagnifyingGlass
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Network':
      return (
        <Network
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Pencil':
      return (
        <Pencil
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Pie':
      return (
        <Pie
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Pin':
      return (
        <Pin
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Play':
      return (
        <Play
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Pointer':
      return (
        <Pointer
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'SlideLeft':
      return (
        <SlideLeft
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'SlideRight':
      return (
        <SlideRight
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'ThreeDots':
      return (
        <ThreeDots
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'ThreeDotsHoriz':
      return (
        <ThreeDots
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color),
            'transform',
            'rotate-90'
          )}
        />
      );
    case 'Triangle':
      return (
        <Triangle
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    case 'Video':
      return (
        <Video
          className={classNames(
            'fill-current',
            iconSize(size),
            iconColor(color)
          )}
        />
      );
    default:
      return '';
  }
};

const Icon = (props) => {
  return renderIcon({ ...props });
};

export default Icon;
