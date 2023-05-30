
export const selectContacts = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectStatusFilter],
    (contacts, filter) => {
      
    }
  );