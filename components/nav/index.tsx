import Link from 'next/link'
import Container from '@material-ui/core/Container'
// import Button from '@material-ui/core/Button'

export default function Nav({ title = '' }) {
  return (
    <Container>
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          {/* <Button href="/new">New Song</Button> */}
        </div>
      </nav>
    </Container>
  )
}
