import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Rishiiadmin</span>
            </div>

            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconag">2</span>
                </div>

            <div className="topRight">
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconag">2</span>
                </div>

            <div className="topRight">
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://dthezntil550i.cloudfront.net/r0/latest/r01803100036241380000902449/1280_960/40babcdb-1e7f-4c8c-853c-e4826f5ec7d8.png" alt="" className="topAvatar" />
                


                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
