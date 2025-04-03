import { create } from 'zustand'

import type { IUser } from '../types'

interface IState {
  user: IUser
}

export const useUserStore = create<IState>(() => ({
  user: {
    id: '1',
    name: 'Илья',
    lastName: 'Тарасов',
    secondName: 'Павлович',
    email: 'mail@mail.ru'
  }
}))
