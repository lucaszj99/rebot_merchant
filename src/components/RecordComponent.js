import React from "react";
import { Loading } from "./LoadingComponent";
import Sidebar from "./SidebarComponent";
const Record = (props) => {
  return (
    <div className="row">
      <Sidebar />
      <div className="col-10 p-5 content-bg">
        <div className="title">
          Record<hr className="border-dark"></hr>
        </div>
        <div className="overlay bg-light">
          <div className="row p-2 m-2">
            <div className="col-8 headerstyle p-2">User in queue: 3</div>
            <div className="col-4 p-2"></div>
          </div>
          <div className="row p-2 m-2">
            <table className="table m-2 p-2 text-center">
              <thead className="labelstyle">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Visit Date</th>
                  <th scope="col">Visit Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Lucas Wong</td>
                  <td>+6018-3710781</td>
                  <td>2020-10-05</td>
                  <td>17:50:00</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Justin Ngu</td>
                  <td>+6011-15304639</td>
                  <td>2020-10-05</td>
                  <td>17:59:00</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Kelvin Pang</td>
                  <td>+6017-8268113</td>
                  <td>2020-10-05</td>
                  <td>18:03:00</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Gorden Lim</td>
                  <td>+6016-3914500</td>
                  <td>2020-10-05</td>
                  <td>18:04:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
