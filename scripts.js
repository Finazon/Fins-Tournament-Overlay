function updateControls(){
    var list = document.getElementById("getset")
    var length = list.value
    if(length == 'Bo1'){
        document.getElementById('games').innerHTML = `
        <div>
            Game 1: 
            <select name="Game 1 Stage" id="stageg1">
                <option value="Barnacle & Dime">Barnacle & Dime</option>
                <option value="Bluefin Depot">Bluefin Depot</option>
                <option value="Brinewater Springs">Brinewater Springs</option>
                <option value="Crableg Capital">Crableg Capital</option>
                <option value="Eeltail Alley">Eeltail Alley</option>
                <option value="Flounder Heights">Flounder Heights</option>
                <option value="Hagglefish Market">Hagglefish Market</option>
                <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                <option value="Humpback Pump Track">Humpback Pump Track</option>
                <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                <option value="Lemuria Hub">Lemuria Hub</option>
                <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                <option value="MakoMart">MakoMart</option>
                <option value="Manta Maria">Manta Maria</option>
                <option value="Marlin Airport">Marlin Airport</option>
                <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                <option value="Robo ROM-en">Robo ROM-en</option>
                <option value="Scorch Gorge">Scorch Gorge</option>
                <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                <option value="Um'ami Ruins">Um'ami Ruins</option>
                <option value="Undertow Spillway">Undertow Spillway</option>
                <option value="Wahoo World">Wahoo World</option>
            </select>
            <select name="Game 1 Mode" id="modeg1">
                <option value="turf">Turf War</option>
                <option value="zones">Splat Zones</option>
                <option value="tower">Tower Control</option>
                <option value="rain">Rainmaker</option>
                <option value="clam">Clam Blitz</option>
            </select>
            <select name="Game 1 Winner" id="wing1">
                <option value="Unknown">N/A</option>
                <option value="Player 1">Player 1</option>
                <option value="Player 2">Player 2</option>
            </select>
        </div>
        `
    }
    else if(length == 'Bo3'){
        document.getElementById('games').innerHTML = `
            <div>
                Game 1: 
                <select name="Game 1 Stage" id="stageg1">
                    <option value="Barnacle & Dime">Barnacle & Dime</option>
                    <option value="Bluefin Depot">Bluefin Depot</option>
                    <option value="Brinewater Springs">Brinewater Springs</option>
                    <option value="Crableg Capital">Crableg Capital</option>
                    <option value="Eeltail Alley">Eeltail Alley</option>
                    <option value="Flounder Heights">Flounder Heights</option>
                    <option value="Hagglefish Market">Hagglefish Market</option>
                    <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                    <option value="Humpback Pump Track">Humpback Pump Track</option>
                    <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                    <option value="Lemuria Hub">Lemuria Hub</option>
                    <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                    <option value="MakoMart">MakoMart</option>
                    <option value="Manta Maria">Manta Maria</option>
                    <option value="Marlin Airport">Marlin Airport</option>
                    <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                    <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                    <option value="Robo ROM-en">Robo ROM-en</option>
                    <option value="Scorch Gorge">Scorch Gorge</option>
                    <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                    <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                    <option value="Um'ami Ruins">Um'ami Ruins</option>
                    <option value="Undertow Spillway">Undertow Spillway</option>
                    <option value="Wahoo World">Wahoo World</option>
                </select>
                <select name="Game 1 Mode" id="modeg1">
                    <option value="turf">Turf War</option>
                    <option value="zones">Splat Zones</option>
                    <option value="tower">Tower Control</option>
                    <option value="rain">Rainmaker</option>
                    <option value="clam">Clam Blitz</option>
                </select>
                <select name="Game 1 Winner" id="wing1">
                    <option value="Unknown">N/A</option>
                    <option value="Player 1">Player 1</option>
                    <option value="Player 2">Player 2</option>
                </select>
            </div>
            <img />
            <div>
                Game 2: 
                <select name="Game 2 Stage" id="stageg2">
                    <option value="Counterpick">Counterpick</option>
                    <option value="Barnacle & Dime">Barnacle & Dime</option>
                    <option value="Bluefin Depot">Bluefin Depot</option>
                    <option value="Brinewater Springs">Brinewater Springs</option>
                    <option value="Crableg Capital">Crableg Capital</option>
                    <option value="Eeltail Alley">Eeltail Alley</option>
                    <option value="Flounder Heights">Flounder Heights</option>
                    <option value="Hagglefish Market">Hagglefish Market</option>
                    <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                    <option value="Humpback Pump Track">Humpback Pump Track</option>
                    <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                    <option value="Lemuria Hub">Lemuria Hub</option>
                    <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                    <option value="MakoMart">MakoMart</option>
                    <option value="Manta Maria">Manta Maria</option>
                    <option value="Marlin Airport">Marlin Airport</option>
                    <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                    <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                    <option value="Robo ROM-en">Robo ROM-en</option>
                    <option value="Scorch Gorge">Scorch Gorge</option>
                    <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                    <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                    <option value="Um'ami Ruins">Um'ami Ruins</option>
                    <option value="Undertow Spillway">Undertow Spillway</option>
                    <option value="Wahoo World">Wahoo World</option>
                </select>
                <select name="Game 2 Mode" id="modeg2">
                    <option value="turf">Turf War</option>
                    <option value="zones">Splat Zones</option>
                    <option value="tower">Tower Control</option>
                    <option value="rain">Rainmaker</option>
                    <option value="clam">Clam Blitz</option>
                    <option value="counter">Counterpick</option>
                </select>
                <select name="Game 2 Winner" id="wing2">
                    <option value="Unknown">N/A</option>
                    <option value="Player 1">Player 1</option>
                    <option value="Player 2">Player 2</option>
                </select>
            </div>
            <img />
            <div>
                Game 3: 
                <select name="Game 3 Stage" id="stageg3">
                    <option value="Counterpick">Counterpick</option>
                    <option value="Barnacle & Dime">Barnacle & Dime</option>
                    <option value="Bluefin Depot">Bluefin Depot</option>
                    <option value="Brinewater Springs">Brinewater Springs</option>
                    <option value="Crableg Capital">Crableg Capital</option>
                    <option value="Eeltail Alley">Eeltail Alley</option>
                    <option value="Flounder Heights">Flounder Heights</option>
                    <option value="Hagglefish Market">Hagglefish Market</option>
                    <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                    <option value="Humpback Pump Track">Humpback Pump Track</option>
                    <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                    <option value="Lemuria Hub">Lemuria Hub</option>
                    <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                    <option value="MakoMart">MakoMart</option>
                    <option value="Manta Maria">Manta Maria</option>
                    <option value="Marlin Airport">Marlin Airport</option>
                    <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                    <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                    <option value="Robo ROM-en">Robo ROM-en</option>
                    <option value="Scorch Gorge">Scorch Gorge</option>
                    <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                    <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                    <option value="Um'ami Ruins">Um'ami Ruins</option>
                    <option value="Undertow Spillway">Undertow Spillway</option>
                    <option value="Wahoo World">Wahoo World</option>
                </select>
                <select name="Game 3 Mode" id="modeg3">
                    <option value="turf">Turf War</option>
                    <option value="zones">Splat Zones</option>
                    <option value="tower">Tower Control</option>
                    <option value="rain">Rainmaker</option>
                    <option value="clam">Clam Blitz</option>
                    <option value="counter">Counterpick</option>
                </select>
                <select name="Game 3 Winner" id="wing3">
                    <option value="Unknown">N/A</option>
                    <option value="Player 1">Player 1</option>
                    <option value="Player 2">Player 2</option>
                </select>
            </div>
            <img />
        `
    }
    else if(length == 'Bo5'){
        document.getElementById('games').innerHTML = `
        <div>
            Game 1: 
            <select name="Game 1 Stage" id="stageg1">
                <option value="Barnacle & Dime">Barnacle & Dime</option>
                <option value="Bluefin Depot">Bluefin Depot</option>
                <option value="Brinewater Springs">Brinewater Springs</option>
                <option value="Crableg Capital">Crableg Capital</option>
                <option value="Eeltail Alley">Eeltail Alley</option>
                <option value="Flounder Heights">Flounder Heights</option>
                <option value="Hagglefish Market">Hagglefish Market</option>
                <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                <option value="Humpback Pump Track">Humpback Pump Track</option>
                <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                <option value="Lemuria Hub">Lemuria Hub</option>
                <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                <option value="MakoMart">MakoMart</option>
                <option value="Manta Maria">Manta Maria</option>
                <option value="Marlin Airport">Marlin Airport</option>
                <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                <option value="Robo ROM-en">Robo ROM-en</option>
                <option value="Scorch Gorge">Scorch Gorge</option>
                <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                <option value="Um'ami Ruins">Um'ami Ruins</option>
                <option value="Undertow Spillway">Undertow Spillway</option>
                <option value="Wahoo World">Wahoo World</option>
            </select>
            <select name="Game 1 Mode" id="modeg1">
                <option value="turf">Turf War</option>
                <option value="zones">Splat Zones</option>
                <option value="tower">Tower Control</option>
                <option value="rain">Rainmaker</option>
                <option value="clam">Clam Blitz</option>
            </select>
            <select name="Game 1 Winner" id="wing1">
                <option value="Unknown">N/A</option>
                <option value="Player 1">Player 1</option>
                <option value="Player 2">Player 2</option>
            </select>
        </div>
        <img />
        <div>
            Game 2: 
            <select name="Game 2 Stage" id="stageg2">
                <option value="Counterpick">Counterpick</option>
                <option value="Barnacle & Dime">Barnacle & Dime</option>
                <option value="Bluefin Depot">Bluefin Depot</option>
                <option value="Brinewater Springs">Brinewater Springs</option>
                <option value="Crableg Capital">Crableg Capital</option>
                <option value="Eeltail Alley">Eeltail Alley</option>
                <option value="Flounder Heights">Flounder Heights</option>
                <option value="Hagglefish Market">Hagglefish Market</option>
                <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                <option value="Humpback Pump Track">Humpback Pump Track</option>
                <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                <option value="Lemuria Hub">Lemuria Hub</option>
                <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                <option value="MakoMart">MakoMart</option>
                <option value="Manta Maria">Manta Maria</option>
                <option value="Marlin Airport">Marlin Airport</option>
                <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                <option value="Robo ROM-en">Robo ROM-en</option>
                <option value="Scorch Gorge">Scorch Gorge</option>
                <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                <option value="Um'ami Ruins">Um'ami Ruins</option>
                <option value="Undertow Spillway">Undertow Spillway</option>
                <option value="Wahoo World">Wahoo World</option>
            </select>
            <select name="Game 2 Mode" id="modeg2">
                <option value="turf">Turf War</option>
                <option value="zones">Splat Zones</option>
                <option value="tower">Tower Control</option>
                <option value="rain">Rainmaker</option>
                <option value="clam">Clam Blitz</option>
                <option value="counter">Counterpick</option>
            </select>
            <select name="Game 2 Winner" id="wing2">
                <option value="Unknown">N/A</option>
                <option value="Player 1">Player 1</option>
                <option value="Player 2">Player 2</option>
            </select>
        </div>
        <img />
        <div>
            Game 3: 
            <select name="Game 3 Stage" id="stageg3">
                <option value="Counterpick">Counterpick</option>
                <option value="Barnacle & Dime">Barnacle & Dime</option>
                <option value="Bluefin Depot">Bluefin Depot</option>
                <option value="Brinewater Springs">Brinewater Springs</option>
                <option value="Crableg Capital">Crableg Capital</option>
                <option value="Eeltail Alley">Eeltail Alley</option>
                <option value="Flounder Heights">Flounder Heights</option>
                <option value="Hagglefish Market">Hagglefish Market</option>
                <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                <option value="Humpback Pump Track">Humpback Pump Track</option>
                <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                <option value="Lemuria Hub">Lemuria Hub</option>
                <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                <option value="MakoMart">MakoMart</option>
                <option value="Manta Maria">Manta Maria</option>
                <option value="Marlin Airport">Marlin Airport</option>
                <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                <option value="Robo ROM-en">Robo ROM-en</option>
                <option value="Scorch Gorge">Scorch Gorge</option>
                <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                <option value="Um'ami Ruins">Um'ami Ruins</option>
                <option value="Undertow Spillway">Undertow Spillway</option>
                <option value="Wahoo World">Wahoo World</option>
            </select>
            <select name="Game 3 Mode" id="modeg3">
                <option value="turf">Turf War</option>
                <option value="zones">Splat Zones</option>
                <option value="tower">Tower Control</option>
                <option value="rain">Rainmaker</option>
                <option value="clam">Clam Blitz</option>
                <option value="counter">Counterpick</option>
            </select>
            <select name="Game 3 Winner" id="wing3">
                <option value="Unknown">N/A</option>
                <option value="Player 1">Player 1</option>
                <option value="Player 2">Player 2</option>
            </select>
        </div>
        <img />
        <div>
            Game 4: 
            <select name="Game 4 Stage" id="stageg4">
                <option value="Counterpick">Counterpick</option>
                <option value="Barnacle & Dime">Barnacle & Dime</option>
                <option value="Bluefin Depot">Bluefin Depot</option>
                <option value="Brinewater Springs">Brinewater Springs</option>
                <option value="Crableg Capital">Crableg Capital</option>
                <option value="Eeltail Alley">Eeltail Alley</option>
                <option value="Flounder Heights">Flounder Heights</option>
                <option value="Hagglefish Market">Hagglefish Market</option>
                <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                <option value="Humpback Pump Track">Humpback Pump Track</option>
                <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                <option value="Lemuria Hub">Lemuria Hub</option>
                <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                <option value="MakoMart">MakoMart</option>
                <option value="Manta Maria">Manta Maria</option>
                <option value="Marlin Airport">Marlin Airport</option>
                <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                <option value="Robo ROM-en">Robo ROM-en</option>
                <option value="Scorch Gorge">Scorch Gorge</option>
                <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                <option value="Um'ami Ruins">Um'ami Ruins</option>
                <option value="Undertow Spillway">Undertow Spillway</option>
                <option value="Wahoo World">Wahoo World</option>
            </select>
            <select name="Game 4 Mode" id="modeg4">
                <option value="turf">Turf War</option>
                <option value="zones">Splat Zones</option>
                <option value="tower">Tower Control</option>
                <option value="rain">Rainmaker</option>
                <option value="clam">Clam Blitz</option>
                <option value="counter">Counterpick</option>
            </select>
            <select name="Game 4 Winner" id="wing4">
                <option value="Unknown">N/A</option>
                <option value="Player 1">Player 1</option>
                <option value="Player 2">Player 2</option>
            </select>
        </div>
        <img />
        <div>
            Game 5: 
            <select name="Game 5 Stage" id="stageg5">
                <option value="Counterpick">Counterpick</option>
                <option value="Barnacle & Dime">Barnacle & Dime</option>
                <option value="Bluefin Depot">Bluefin Depot</option>
                <option value="Brinewater Springs">Brinewater Springs</option>
                <option value="Crableg Capital">Crableg Capital</option>
                <option value="Eeltail Alley">Eeltail Alley</option>
                <option value="Flounder Heights">Flounder Heights</option>
                <option value="Hagglefish Market">Hagglefish Market</option>
                <option value="Hammerhead Bridge">Hammerhead Bridge</option>
                <option value="Humpback Pump Track">Humpback Pump Track</option>
                <option value="Inkblot Art Academy">Inkblot Art Academy</option>
                <option value="Lemuria Hub">Lemuria Hub</option>
                <option value="Mahi-Mahi Resort">Mahi-Mahi Resort</option>
                <option value="MakoMart">MakoMart</option>
                <option value="Manta Maria">Manta Maria</option>
                <option value="Marlin Airport">Marlin Airport</option>
                <option value="Minecmeat Metalworks">Minecmeat Metalworks</option>
                <option value="Museum d'Alfonsino">Museum d'Alfonsino</option>
                <option value="Robo ROM-en">Robo ROM-en</option>
                <option value="Scorch Gorge">Scorch Gorge</option>
                <option value="Shipshape Cargo Co.">Shipshape Cargo Co.</option>
                <option value="Sturgeon Shipyard">Sturgeon Shipyard</option>
                <option value="Um'ami Ruins">Um'ami Ruins</option>
                <option value="Undertow Spillway">Undertow Spillway</option>
                <option value="Wahoo World">Wahoo World</option>
            </select>
            <select name="Game 5 Mode" id="modeg5">
                <option value="turf">Turf War</option>
                <option value="zones">Splat Zones</option>
                <option value="tower">Tower Control</option>
                <option value="rain">Rainmaker</option>
                <option value="clam">Clam Blitz</option>
                <option value="counter">Counterpick</option>
            </select>
            <select name="Game 5 Winner" id="wing5">
                <option value="Unknown">N/A</option>
                <option value="Player 1">Player 1</option>
                <option value="Player 2">Player 2</option>
            </select>
        </div>
        <img />
    `
    }
    else if(length == 'Bo7'){
        document.getElementById('games').innerHTML = `Not yet Available`
    }
    else if(length == 'Bo9'){
        document.getElementById('games').innerHTML = `Not yet Available`
    }
}

function updateData(){
    if(document.getElementById("getset").value == "Bo1"){
        window.localStorage.setItem("setLength", `${document.getElementById("getset").value}`)
        window.localStorage.setItem("stage1", `${document.getElementById("stageg1").value}`)
        window.localStorage.setItem("mode1", `${document.getElementById("modeg1").value}`)
        window.localStorage.setItem("winner1", `${document.getElementById("wing1").value}`)
        window.localStorage.setItem("player1", `${document.getElementById('player1').value}`)
        window.localStorage.setItem("player2", `${document.getElementById('player2').value}`)
        window.localStorage.setItem("score1", `${document.getElementById('score1').value}`)
        window.localStorage.setItem("score2", `${document.getElementById('score2').value}`)
        window.localStorage.setItem("round", `${document.getElementById('round').value}`)
        window.localStorage.setItem("tourney", `${document.getElementById('tourney').value}`)
        window.localStorage.setItem("comm1", `${document.getElementById('comm1').value}`)
        window.localStorage.setItem("comm2", `${document.getElementById('comm2').value}`)
    }
    else if(document.getElementById("getset").value == "Bo3"){
        window.localStorage.setItem("setLength", `${document.getElementById("getset").value}`)
        window.localStorage.setItem("stage1", `${document.getElementById("stageg1").value}`)
        window.localStorage.setItem("mode1", `${document.getElementById("modeg1").value}`)
        window.localStorage.setItem("winner1", `${document.getElementById("wing1").value}`)
        window.localStorage.setItem("stage2", `${document.getElementById("stageg2").value}`)
        window.localStorage.setItem("mode2", `${document.getElementById("modeg2").value}`)
        window.localStorage.setItem("winner2", `${document.getElementById("wing2").value}`)
        window.localStorage.setItem("stage3", `${document.getElementById("stageg3").value}`)
        window.localStorage.setItem("mode3", `${document.getElementById("modeg3").value}`)
        window.localStorage.setItem("winner3", `${document.getElementById("wing3").value}`)
        window.localStorage.setItem("player1", `${document.getElementById('player1').value}`)
        window.localStorage.setItem("player2", `${document.getElementById('player2').value}`)
        window.localStorage.setItem("score1", `${document.getElementById('score1').value}`)
        window.localStorage.setItem("score2", `${document.getElementById('score2').value}`)
        window.localStorage.setItem("round", `${document.getElementById('round').value}`)
        window.localStorage.setItem("tourney", `${document.getElementById('tourney').value}`)
        window.localStorage.setItem("comm1", `${document.getElementById('comm1').value}`)
        window.localStorage.setItem("comm2", `${document.getElementById('comm2').value}`)
    }
    else if(document.getElementById("getset").value == "Bo5"){
        window.localStorage.setItem("setLength", `${document.getElementById("getset").value}`)
        window.localStorage.setItem("stage1", `${document.getElementById("stageg1").value}`)
        window.localStorage.setItem("mode1", `${document.getElementById("modeg1").value}`)
        window.localStorage.setItem("winner1", `${document.getElementById("wing1").value}`)
        window.localStorage.setItem("stage2", `${document.getElementById("stageg2").value}`)
        window.localStorage.setItem("mode2", `${document.getElementById("modeg2").value}`)
        window.localStorage.setItem("winner2", `${document.getElementById("wing2").value}`)
        window.localStorage.setItem("stage3", `${document.getElementById("stageg3").value}`)
        window.localStorage.setItem("mode3", `${document.getElementById("modeg3").value}`)
        window.localStorage.setItem("winner3", `${document.getElementById("wing3").value}`)
        window.localStorage.setItem("stage4", `${document.getElementById("stageg4").value}`)
        window.localStorage.setItem("mode4", `${document.getElementById("modeg4").value}`)
        window.localStorage.setItem("winner4", `${document.getElementById("wing4").value}`)
        window.localStorage.setItem("stage5", `${document.getElementById("stageg5").value}`)
        window.localStorage.setItem("mode5", `${document.getElementById("modeg5").value}`)
        window.localStorage.setItem("winner5", `${document.getElementById("wing5").value}`)
        window.localStorage.setItem("player1", `${document.getElementById('player1').value}`)
        window.localStorage.setItem("player2", `${document.getElementById('player2').value}`)
        window.localStorage.setItem("score1", `${document.getElementById('score1').value}`)
        window.localStorage.setItem("score2", `${document.getElementById('score2').value}`)
        window.localStorage.setItem("round", `${document.getElementById('round').value}`)
        window.localStorage.setItem("tourney", `${document.getElementById('tourney').value}`)
        window.localStorage.setItem("comm1", `${document.getElementById('comm1').value}`)
        window.localStorage.setItem("comm2", `${document.getElementById('comm2').value}`)
    }
}

async function repeater(){
    update()
    setTimeout(repeater, 100)
}

async function repeater2(){
    update2()
    setTimeout(repeater2, 100)
}

async function repeater3(){
    update3()
    setTimeout(repeater3, 100)
}

function update(){
    setOverlayData()
}

function update2(){
    setInter()
}

function update3(){
    setWaiting()
}

function setOverlayData(){
    var p1 = window.localStorage.getItem("player1")
    var p2 = window.localStorage.getItem("player2")
    var s1 = window.localStorage.getItem("score1")
    var s2 = window.localStorage.getItem("score2")
    var comm1 = window.localStorage.comm2
    var comm2 = window.localStorage.comm1
    document.getElementById("overlay").innerHTML = `
        <p style="font-family:Splatoon2;font-size:50px;position:absolute;top:-62px;left:10px;color:orange">${p1}</p>
        <p style="font-family:Splatoon2;font-size:50px;position:absolute;top:18px;left:10px;color:dodgerblue">${p2}</p>
        <p style="font-family:Splatoon2;font-size:50px;position:absolute;top:-60px;left:428px;text-align:center;width:50px">${s1}</p>
        <p style="font-family:Splatoon2;font-size:50px;position:absolute;top:18px;left:428px;text-align:center;width:50px">${s2}</p>
    `
}

function setInter(){
    var map1 = window.localStorage.stage1
    var map2 = window.localStorage.stage2
    var map3 = window.localStorage.stage3
    var map4 = window.localStorage.stage4
    var map5 = window.localStorage.stage5
    var mode1 = window.localStorage.mode1
    var mode2 = window.localStorage.mode2
    var mode3 = window.localStorage.mode3
    var mode4 = window.localStorage.mode4
    var mode5 = window.localStorage.mode5
    var wn1 = window.localStorage.winner1
    var wn2 = window.localStorage.winner2
    var wn3 = window.localStorage.winner3
    var wn4 = window.localStorage.winner4
    var wn5 = window.localStorage.winner5
    var p1 = window.localStorage.player1
    var p2 = window.localStorage.player2
    var s1 = window.localStorage.score1
    var s2 = window.localStorage.score2
    var length = window.localStorage.setLength
    var name = window.localStorage.tourney
    var round = window.localStorage.round
    var comm1 = window.localStorage.comm2
    var comm2 = window.localStorage.comm1
    if(length == "Bo1"){
        if(wn1 == "Unknown"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:822px">
            <image src="assets/stages/${map1}.png" id="stageIMG">
            <image src="assets/modes/${mode1}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn1 == "Player 1"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:822px">
            <image src="assets/stages/${map1}.png" id="stageIMGA">
            <image src="assets/modes/${mode1}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn21== "Player 2"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:822px">
            <image src="assets/stages/${map1}.png" id="stageIMGA">
            <image src="assets/modes/${mode1}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
    }
    else if(length == "Bo3"){
        if(wn1 == "Unknown"){
            document.getElementById("content2").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;left:260px">
            <image src="assets/stages/${map1}.png" id="stageIMG">
            <image src="assets/modes/${mode1}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn1 == "Player 1"){
            document.getElementById("content2").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;left:260px">
            <image src="assets/stages/${map1}.png" id="stageIMGA">
            <image src="assets/modes/${mode1}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn1 == "Player 2"){
            document.getElementById("content2").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;left:260px">
            <image src="assets/stages/${map1}.png" id="stageIMGA">
            <image src="assets/modes/${mode1}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
        if(wn2 == "Unknown"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:822px">
            <image src="assets/stages/${map2}.png" id="stageIMG">
            <image src="assets/modes/${mode2}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn2 == "Player 1"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:822px">
            <image src="assets/stages/${map2}.png" id="stageIMGA">
            <image src="assets/modes/${mode2}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn2 == "Player 2"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:822px">
            <image src="assets/stages/${map2}.png" id="stageIMGA">
            <image src="assets/modes/${mode2}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
        if(wn3 == "Unknown"){
            document.getElementById("content4").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:260px">
            <image src="assets/stages/${map3}.png" id="stageIMG">
            <image src="assets/modes/${mode3}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn3 == "Player 1"){
            document.getElementById("content4").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:260px">
            <image src="assets/stages/${map3}.png" id="stageIMGA">
            <image src="assets/modes/${mode3}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn3 == "Player 2"){
            document.getElementById("content4").innerHTML = `
            <div style="width:263px;height:500px;scale:1.5;position:absolute;top:360px;right:260px">
            <image src="assets/stages/${map3}.png" id="stageIMGA">
            <image src="assets/modes/${mode3}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
    }
    else if(length == "Bo5"){
        if(wn1 == "Unknown"){
            document.getElementById("content1").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;left:50px">
            <image src="assets/stages/${map1}.png" id="stageIMG">
            <image src="assets/modes/${mode1}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn1 == "Player 1"){
            document.getElementById("content1").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;left:50px">
            <image src="assets/stages/${map1}.png" id="stageIMGA">
            <image src="assets/modes/${mode1}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn1 == "Player 2"){
            document.getElementById("content1").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;left:50px">
            <image src="assets/stages/${map1}.png" id="stageIMGA">
            <image src="assets/modes/${mode1}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
        if(wn2 == "Unknown"){
            document.getElementById("content2").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;left:436px">
            <image src="assets/stages/${map2}.png" id="stageIMG">
            <image src="assets/modes/${mode2}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn2 == "Player 1"){
            document.getElementById("content2").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;left:436px">
            <image src="assets/stages/${map2}.png" id="stageIMGA">
            <image src="assets/modes/${mode2}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn2 == "Player 2"){
            document.getElementById("content2").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;left:436px">
            <image src="assets/stages/${map2}.png" id="stageIMGA">
            <image src="assets/modes/${mode2}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
        if(wn3 == "Unknown"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:818px">
            <image src="assets/stages/${map3}.png" id="stageIMG">
            <image src="assets/modes/${mode3}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn3 == "Player 1"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:818px">
            <image src="assets/stages/${map3}.png" id="stageIMGA">
            <image src="assets/modes/${mode3}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn3 == "Player 2"){
            document.getElementById("content3").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:818px">
            <image src="assets/stages/${map3}.png" id="stageIMGA">
            <image src="assets/modes/${mode3}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
        if(wn4 == "Unknown"){
            document.getElementById("content4").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:435px">
            <image src="assets/stages/${map4}.png" id="stageIMG">
            <image src="assets/modes/${mode4}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn4 == "Player 1"){
            document.getElementById("content4").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:435px">
            <image src="assets/stages/${map4}.png" id="stageIMGA">
            <image src="assets/modes/${mode4}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn4 == "Player 2"){
            document.getElementById("content4").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:435px">
            <image src="assets/stages/${map4}.png" id="stageIMGA">
            <image src="assets/modes/${mode4}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
        if(wn5 == "Unknown"){
            document.getElementById("content5").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:50px">
            <image src="assets/stages/${map5}.png" id="stageIMG">
            <image src="assets/modes/${mode5}.png" id="modeIMG">
            </div>
            `
        }
        else if(wn5 == "Player 1"){
            document.getElementById("content5").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:50px">
            <image src="assets/stages/${map5}.png" id="stageIMGA">
            <image src="assets/modes/${mode5}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p1}</p>
            </div>
            `
        }
        else if(wn5 == "Player 2"){
            document.getElementById("content5").innerHTML = `
            <div style="width:263px;height:500px;scale:1.25;position:absolute;top:360px;right:50px">
            <image src="assets/stages/${map5}.png" id="stageIMGA">
            <image src="assets/modes/${mode5}.png" id="modeIMGA">
            <p style="font-family:Splatoon2;font-size:40px;text-align:center;top:-55px;position:relative">${p2}</p>
            </div>
            `
        }
    }
    document.getElementById("scoreboard").innerHTML = `
    <image src="assets/scoreboard.png" style="position:absolute;scale:1.2;top:75px;left:458px">
    <p style="font-family:Splatoon1;font-size:50px;position:absolute;top:-68px;right:147px;text-align:center;width:1600px">${name}</p>
    <p style="font-family:Splatoon1;font-size:50px;position:absolute;top:98px;right:443px;text-align:center;width:1000px">${round}</p>
    <p style="font-family:Splatoon2;font-size:50px;position:absolute;top:14px;right:1067px;text-align:right;width:300px">${p1}</p>
    <p style="font-family:Splatoon2;font-size:50px;position:absolute;top:14px;left:1078px;text-align:left;width:300px">${p2}</p>
    <p style="font-family:Splatoon2;font-size:70px;position:absolute;top:-25px;right:977px;text-align:center;width:50px">${s1}</p>
    <p style="font-family:Splatoon2;font-size:70px;position:absolute;top:-25px;left:991px;text-align:center;width:50px">${s2}</p>`
}

function setWaiting(){
    var name = window.localStorage.tourney
    var round = window.localStorage.round
    document.getElementById("waiting").innerHTML = `
    <p style="font-family:Splatoon1;font-size:50px;position:absolute;top:15px;right:600px">Waiting for Next Round:</p>
    <p style="font-family:Splatoon1;font-size:50px;position:absolute;top:-68px;right:147px;text-align:center;width:1600px">${name}</p>
    <p style="font-family:Splatoon1;font-size:50px;position:absolute;top:98px;right:443px;text-align:center;width:1000px">${round}</p>`
}

function setCards1(){
   document.getElementById("content1").classList.toggle('start')
}

function setCards2(){
    document.getElementById("content2").classList.toggle('start')
}

function setCards3(){
    document.getElementById("content3").classList.toggle('start')
}

function setCards4(){
    document.getElementById("content4").classList.toggle('start')
}

function setCards5(){
    document.getElementById("content5").classList.toggle('start')
}

function setBoard(){
    document.getElementById("scoreboard").classList.toggle('start')
}