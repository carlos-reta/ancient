import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '../../../models/post';

export const selectDashboardFeature = createFeatureSelector<Post[]>('dashboard');

export const selectDashboard = createSelector(selectDashboardFeature, posts => posts);
