import React from "react";
import "./Mc.css";
import Notcomp from "./Notcomp";
import EmailIcon from "@mui/icons-material/Email";
import DraftsIcon from "@mui/icons-material/Drafts";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PopChart from "./components/PopChart";

export default function MainContainer() {
  const arr = [
    {
      name: "Manasur Gerrad",
      count: 10,
      email: "manasur@email.com",
    },
    {
      name: "Octavia Sherly",
      count: 8,
      email: "octavia@email.com",
    },
    {
      name: "Jonathan Kerpiwe",
      count: 9,
      email: "jonatkep@email.com",
    },
    {
      name: "Elvina Seagul",
      count: 7,
      email: "elvinasea@email.com",
    },
    {
      name: "Mami Mawar Indah",
      count: 4,
      email: "mammawarr@email.com",
    },
    {
      name: "Invina Louissana",
      count: 3,
      email: "invinalouis@email.com",
    },
  ];
  return (
    <div className="holder">
      <div className="LHS">
        <div className="lHead">Whatcs</div>
        <div className="lmenu">
          <button className="lmenuDashboard">Dashboard</button>
          <button className="lmenuInbox">Inbox</button>
          <button className="lmenuBroadcast">Broadcast</button>
          <button className="lmenuContacts">Contacts</button>
          <button className="lmenuAutomation">Automation</button>
        </div>
        <div className="lFoot">
          <div className="lFootCnumb">
            <div>Connected number</div>
            <div className="underL">+123456789</div>
          </div>
          <div className="lFootAccName">
            <div className="imgLogo"></div>
            <div className="lFootAccNameDiv">
              <p className="boldText">Octavia Sherly</p>
              <p className="lightText">octavia@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="RHS">
        <div className="rHead">
          <div className="rHeadLHS">
            <div className="rHeadLHSName">Hi Octavia</div>
            <div className="rHeadLHSsentence">
              <p>Take a look of </p>
              <div className="rHeadColouredText">weekly </div>
              <p> customer engagement overview</p>
            </div>
          </div>
          <div className="rHeadRHS">
            <div className="rHeadLeft">
              <div className="rHeadRHSUp">
                You have 2 new tickets
                <br />
                <div className="colouredText">view inbox</div>
              </div>
            </div>
            <div className="rHeadRight">
              <NotificationsIcon />
            </div>
          </div>
        </div>
        <div className="rPage">
          <div className="notifications">
            <Notcomp
              icon={<EmailIcon />}
              number={34}
              name={"New ticket"}
            ></Notcomp>
            <Notcomp
              icon={<DraftsIcon />}
              number={30}
              name={"Open ticket"}
            ></Notcomp>
            <Notcomp
              icon={<DynamicFeedIcon />}
              number={10}
              name={"Pending"}
            ></Notcomp>
            <Notcomp
              icon={<CheckCircleIcon />}
              number={28}
              name={"Total Resolved"}
            ></Notcomp>
            <Notcomp
              icon={<WarningIcon />}
              number={8}
              name={"Ticket Expired"}
            ></Notcomp>
            <Notcomp
              icon={<AccessTimeIcon />}
              number={1.2}
              name={"Avg Response time"}
            ></Notcomp>
          </div>
          <div className="ticketStatus"></div>
          <div className="topAgent">
            {arr.map((item, index) => (
              <div key={index} className="taParent">
                <div className="taHolder">
                  <div className="imgLogo"></div>
                  <div className="talhs">
                    <div>{item.name}</div>
                    <div className="smallfont">{item.email}</div>
                  </div>
                  <div className="tarhs">
                    {item.count} Chats &nbsp; &nbsp; <MoreHorizIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="totalMessages">
            <PopChart />
          </div>
          <div className="messageVolume"></div>
          <div className="rates"></div>
        </div>
      </div>
    </div>
  );
}
