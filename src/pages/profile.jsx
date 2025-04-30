import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/layout";
import Info from "../components/profile/Info";
import { getProfileUsers } from "../redux/actions/profileAction";

const Profile = () => {
  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [saveTab, setSaveTab] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ id, auth }));
    }
  }, [id, auth, dispatch, profile.ids]);


  return (
    <Layout title={`Profile - ${auth?.user?.fullname}`}>
      <div className="profile">
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />
      </div>
    </Layout>
  );
};

export default Profile;
