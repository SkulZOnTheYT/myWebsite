import vinkev from './assets/vinkev.png'
import { Footer, Button, Drawer, Sidebar, Flowbite, DarkThemeToggle } from "flowbite-react";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {HiOutlineCollection, HiOutlineExternalLink, HiInformationCircle} from "react-icons/hi";
import LandingPage from './LandingPage'; 
import KNZPage from './KNZPage';
import Profile from './list';
import LinktreePage from "./LinkTree";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleLinkClick = () => {
    if (isOpen) {
      handleClose();
    }
  };
  
  return (
<Router>
<Flowbite>
<div className="dark:bg-[#1e1e1e]">
<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start rtl:justify-end">
        <Button onClick={handleOpen} class="sm-hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </Button>
        <Link to="/" class="flex ms-2 md:me-24" onClick={handleLinkClick}>
          <img src={vinkev} class="h-8 me-3" alt="VinKev Logo" />
          <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">VinKev Craft</span>
        </Link>
      </div>
      <div class="flex items-center ms-3">
      <DarkThemeToggle class="flex text-sm rounded-full focus:ring-4"/>
      </div>
    </div>
  </div>
</nav>
<Drawer open={isOpen} onClose={handleClose} className="mt-20">
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Collapse icon={HiOutlineCollection} label="Minecraft">
                      <Link to="/list" onClick={handleLinkClick}><Sidebar.Item>List</Sidebar.Item></Link>
                      <Link to="/knz" onClick={handleLinkClick}><Sidebar.Item>KNZ UI</Sidebar.Item></Link>
                    </Sidebar.Collapse>
                    <Link to="/link" onClick={handleLinkClick}><Sidebar.Item icon={HiOutlineExternalLink}>
                      LinkTree
                   </Sidebar.Item></Link>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="https://github.com/SkulZOnTheYT" icon={HiInformationCircle} onClick={handleLinkClick}>
                      Help
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>

   <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/list" element={<Profile />} />
      <Route path="/knz" element={<KNZPage/>} />
      <Route path="/link" element={<LinktreePage/>} />
   </Routes>
    <Footer container className="bg-slate-200">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#landing"
            src={vinkev}
            alt="Vinkev Logo"
            name="Vinkev Craft"
          />
          <Footer.LinkGroup>
            <Footer.Link href="https://discord.com/invite/tMbjtxKfck">Discord</Footer.Link>
            <Footer.Link href="https://whatsapp.com/channel/0029Vag7qpzHbFV0TyWAVp2z">WhatsApp Channel</Footer.Link>
            <Footer.Link href="https://www.tiktok.com/@vinkevcraft?_t=8pQmJGEZKoU&_r=1">Tiktok</Footer.Link>
            <Footer.Link href="https://www.youtube.com/@vinkevcraft">Youtube</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="https://github.com/SkulZOnTheYT" by="SK Store™  All rights reserved." year={2024} />
      </div>
    </Footer>
  </div>
  </Flowbite>
</Router>
  );
}

export default App;