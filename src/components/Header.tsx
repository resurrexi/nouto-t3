import { signIn, signOut, useSession } from "next-auth/react"

export const Header = () => {
  const { data: sessionData } = useSession()

  return (
    <header className="bg-sky-800 text-neutral-100">
      <nav className="mx-auto flex max-w-7xl p-6 lg:px-8">
        <div className="flex-1 pl-5 text-3xl font-bold">
          {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
        </div>
        <div className="flex-none gap-2">
          <div>
            {sessionData?.user ? (
              <label tabIndex={0} onClick={() => void signOut()}>
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </label>
            ) : (
              <button onClick={() => void signIn()}>Sign in</button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
