import { createSelector } from '@reduxjs/toolkit';
import { filteredData } from '../../utils/filter';

export const getFilter = state => state.contacts.filter;
export const getAllContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => filteredData(contacts, filter),
);
