import React from 'react';

class OverviewAnnouncement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="po-announcement">Site-Wide Announcement Message! -- Sale / Discount <strong>Offer</strong> -- <div className="po-highlight">New Product Highlight</div></div>
    );
  }
}

export default OverviewAnnouncement;