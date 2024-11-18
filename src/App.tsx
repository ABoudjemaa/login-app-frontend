import LoginForm from './components/organisms/LoginForm'
import LoginLogo from './components/organisms/LoginLogo'
import MainLayout from './components/templates/MainLayout'

function App() { 

  return (
    <MainLayout >
      <div className='flex flex-col md:flex-row'>
        <LoginForm />
        <LoginLogo />
      </div>
    </MainLayout>
  )
}

export default App
