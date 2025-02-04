export class SetDesktopUser {
  static readonly type = '[Core] Set Desktop User';

  constructor(public payload: boolean) {}
}
