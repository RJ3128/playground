import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetDesktopUser } from './core.actions';

export interface CoreStateModel {
  desktopUser: boolean;
}

@State<CoreStateModel>({
  name: 'core',
  defaults: {
    desktopUser: false,
  },
})
@Injectable()
export class CoreState {
  @Action(SetDesktopUser)
  setDesktopUser(
    ctx: StateContext<CoreStateModel>,
    { payload }: SetDesktopUser
  ) {
    const state = ctx.getState();
    state.desktopUser = payload;
    ctx.setState(state);
  }

  @Selector()
  static isDesktopUser(state: CoreStateModel) {
    return state.desktopUser;
  }
}
