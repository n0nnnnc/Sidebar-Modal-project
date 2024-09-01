import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const { openSidebar, openModal, isModalOpen, isSidebarOpen } =
    useGlobalContext()
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      {!isModalOpen && (
        <button onClick={openModal} className="btn">
          show modal
        </button>
      )}
    </main>
  )
}
export default Home
