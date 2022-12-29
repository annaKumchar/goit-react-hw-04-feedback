import React from 'react';
import PropTypes from 'prop-types';

import { NotificationFeedback } from '../Notification/Notification.styled';

export const Notification = ({ message }) => (
  <NotificationFeedback>{message}</NotificationFeedback>
);

Notification.propTypes = {
  message: PropTypes.string,
};
