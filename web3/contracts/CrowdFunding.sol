// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFundidng {
    struct Campaign{
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image )public returns(uint256){
      Campaign storage campaign = campaigns[numberOfCampaigns];

      require(campaign.deadline<block.timestamp,"The deadline should be a date in the future.");

      campaign.owner = _owner;
      campaign.title = _title;
      campaign.target = _target;
      campaign.deadline = _deadline;
      campaign.description = _description;
      campaign.amountCollected = 0;
      campaign.image = _image;

      numberOfCampaigns++;

      //returning index of current campaign
      return numberOfCampaigns - 1;



    }
    //get id of campaign wanna donate to
    function donateToCampaign(uint256 _id) public payable{
        //retreive amount of ehter sent with function call
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];
         
         campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        
        //sends donated ether to campaign owner address
        (bool sent, ) = payable(campaign.owner).call{value:amount}("");
         if(sent){
            campaign.amountCollected = campaign.amountCollected + amount;
         }


        
    }
    function getDonators(uint _id) view public returns(address[] memory, uint[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }
    function getCampaigns()public view returns(Campaign[] memory){
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for(uint i=0;i<numberOfCampaigns;i++){
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }
        return allCampaigns;
    }


}