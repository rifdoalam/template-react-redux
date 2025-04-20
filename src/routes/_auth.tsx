import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

type AuthContext = {
  auth: {
    isAuthenticated: boolean
  }
}

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context}) => {
    const { auth } = context as AuthContext
    if (!auth?.isAuthenticated) {
      return redirect({
        to: '/login',
    })
    }
  },
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
})