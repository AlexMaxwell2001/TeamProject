    //This is to prevent searching without anything in the search bar
    document.getElementById('databaseSearch').disabled=true;
    var current= window.location;
    
    //This is for the search bar functionality
    $("#databaseSearch").on('click',function() {
        var search = $("#Search").val().replace(/[|&;$%@"<>()+,^]/g, "");
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/'+search);
        }
        else{
            $(location).attr('href','/Products/ProductName/'+search);
        }
        
    });
    
    //Only let the user search when their search isn't empty
    $("#Search").on('keyup',function() {
        var search = $("#Search").val().replace(/[|&;$%@"<>()+,^  ]/g, "");
        if (search.length >0) {
            document.getElementById('databaseSearch').disabled=false;
            document.getElementById('databaseSearch').style.cursor="pointer";
        } else {
            document.getElementById('databaseSearch').disabled=true;
            document.getElementById('databaseSearch').style.cursor="default";
        }
    });
    
    //Search using the Enter button
	document.getElementById('Search').addEventListener("keyup", function(event) {
        if (event.keyCode === 13){
            event.preventDefault();
            document.getElementById("databaseSearch").click();
        }
    });
    
    //return to the homepage
    $("#header1").on('click',function() {
        var ar= current.href;
        var count=0;
        var pos=0;
        for(var i=0;i<ar.length;i++){
            if(count==3){
                pos=i;break;
            }
            if(ar.charAt(i)=="/"){
                count++;
            }
        }
        var attempt=ar.substring(pos,ar.length-1);
        var manip=attempt.substring(0,attempt.indexOf("/"));
        if(ar.includes('true')){
            $(location).attr('href','/'+manip+ '/login=true');
        }else{
            $(location).attr('href', '/');
        }
    });

    //Go to the login page
    $("#login").on('click',function() {
        $(location).attr('href', '/Login');
    });

    //Go to the basket page
    $("#checkout").on('click',function() {
        var ar= current.href;
        var count=0;
        var pos=0;
        for(var i=0;i<ar.length;i++){
            if(count==3){
                pos=i;break;
            }
            if(ar.charAt(i)=="/"){
                count++;
            }
        }
        var attempt=ar.substring(pos,ar.length-1);
        var manip=attempt.substring(0,attempt.indexOf("/"));
        var search = $("#Search").val().replace(/[|&;$%@"<>()+,^  ]/g, "");
        if(ar.includes('true')){
            $(location).attr('href', '/'+ manip+'/login=true/Basket');
        }else{
            $(location).attr('href', '/Basket');
        }
    });

    //Go to the Contact us page
    $("#contactus").on('click',function() {
        var ar= current.href;
        var count=0;
        var pos=0;
        for(var i=0;i<ar.length;i++){
            if(count==3){
                pos=i;break;
            }
            if(ar.charAt(i)=="/"){
                count++;
            }
        }
        var attempt=ar.substring(pos,ar.length-1);
        var manip=attempt.substring(0,attempt.indexOf("/"));
        if(ar.includes('true')){
            $(location).attr('href', '/'+ manip+'/login=true/Contact');
        }else{
            $(location).attr('href', '/Contact');
        }
    });

    //Go to the User page
    $("#settings").on('click',function() {
        var ar= current.href;
        var count=0;
        var pos=0;
        for(var i=0;i<ar.length;i++){
            if(count==3){
                pos=i;break;
            }
            if(ar.charAt(i)=="/"){
                count++;
            }
        }
        var attempt=ar.substring(pos,ar.length-1);
        var manip=attempt.substring(0,attempt.indexOf("/"));
        $(location).attr('href', '/'+ manip+'/login=true/User');
    });

    //Go to the findAllProducts view
    $("#all").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName');
        }
        else{
            $(location).attr('href','/Products/ProductName');
        }
    });

    //Skirts category
    $("#skirts").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/skirt');
        }
        else{
            $(location).attr('href','/Products/ProductName/skirt');
        }
    });

    //Bags category
    $("#bags").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/bag');
        }
        else{
            $(location).attr('href','/Products/ProductName/bag');
        }
    });

    //Top
    $("#tops").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/top');
        }
        else{
            $(location).attr('href','/Products/ProductName/top');
        }
    });

    //T-shirt
    $("#tshirts").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/t-shirt');
        }
        else{
            $(location).attr('href','/Products/ProductName/t-shirt');
        }
    });

    //Shoes category
    $("#shoes").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/shoe');
        }
        else{
            $(location).attr('href','/Products/ProductName/shoe');
        }
    });

    //Hoodies category
    $("#hoodies").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/hoodie');
        }
        else{
            $(location).attr('href','/Products/ProductName/hoodie');
        }
    });

    //Jeans category
    $("#jeans").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/jean');
        }
        else{
            $(location).attr('href','/Products/ProductName/jean');
        }
    });

    //Coats category
    $("#coats").on('click',function() {
        var ar= current.href;
        if(ar.includes("true")){
            $(location).attr('href', window.location.href +'/Products/ProductName/coat');
        }
        else{
            $(location).attr('href','/Products/ProductName/coat');
        }
    });

    //Once logout is clicked the user is logged out and will be able to log in again
    $("#logout").click(function(){
        const Http= new XMLHttpRequest();
        const url= '/BasketOps'+'/s/m';
        Http.open("GET",url);
        Http.send(); 
        var timer = setTimeout(function(){$(location).attr('href', '/'); },500);       
    });

    $(document).ready(function(){
        var ar= current.href;
        if(ar.includes('true')){
            document.getElementById('logout').style.visibility="visible";
            document.getElementById('settings').style.visibility="visible";
            document.getElementById('checkout').style.visibility="visible";
            document.getElementById('login').style.visibility="hidden"
        }
    })

    $(document).ready(function(){
        if(current.href.includes("login")){
            var ar= current.href;
            var count=0;
            var pos=0;
            for(var i=0;i<ar.length;i++){
                if(count==3){
                    pos=i;break;
                }
                if(ar.charAt(i)=="/"){
                    count++;
                }
            }
            var attempt=ar.substring(pos,ar.length-1);
            var manip=attempt.substring(0,attempt.indexOf("/"));
            const Http= new XMLHttpRequest();
            const url= "/Check/"+ manip;
            Http.open("GET",url);
            Http.send();
            Http.onreadystatechange=function(){
                var s=Http.responseText;
                 $(document).ready(function(){
                    if(s.toString()=="false"){
                        $('#errorAlert').modal('show');
                        var timer = setTimeout(function(){document.getElementById("logout").click()},3000);  
                    }
                });
            }  
        }
    });

    $(document).ready(function(){
        var s1='data:image/gif;base64,R0lGODlhgAc4BPf/AO5xPexeO/vUk/vVpPalR/7YW/zZiPKTS/7mhv7lLfzIL/epOetZO/WnWu1rPP7lVu5yWv3UOv3r5/718/jHqv/98f/pMP7zxOpSOvu+OPzk2vm6Rv7stfnNyPe1Z/a1qfi1U/7qputWSv3r2ulDOf/zl/rGaPvGV//tNf/xVfWre//0qfe4d//54upNOv/0hv/1uvGJePWmb/vbwvrMiP/78P7kcPzkzv3ku/7cSuxiR/3QLP748/a0k/GHSv3LHPvERv3NPf724vWsmfrVzv/qPP3ae/SbYvSYV/GGVfvdz/7x5vrSwvjFn/u/JP7TSe5ySP/50/7txf/10f3QJf3pyvzHHfm0Lv7z0/3v1/7mlf3GC/3HDP3EDfenKfeoKPepJ/emKvepJvalKvakK/eqJfirJPajLPaiLfisJPahLvitI/iuIvahL/WgL/ivIfWfMPmwIPWeMf3IDfmxH/WdMvmyHvWcM/mzHvmzHfSbNPm0HPSaNfSZNfq1G/SYNvq2GvSXN/q3GfSXOPq4Gfq5GPOWOfOVOvu6F/OUO/u7FvOTO/u8FfOSPPu8FPKRPfu9E/u+E/KQPvy/EvKPP/KOP/zAEfKNP/zBEPKMP/zCD/GLP/zDDvGKP/GJP/3FDPGIPvGHPvGGPvGFPvCDPvCCPvCBPv3GDPCAPvB/PvB+PvB9Pu98Pe97Pf3IDu96Pf3JDu94Pf3JD+93Pf3KD/3LEO92Pe91Pf3LEe50Pf3MEv3NEu5zPe5yPf3OE/3PFP3PFe5uPP3QFv7RF+5tPO1sPP7SGP7UGf7VG+1pPP7WHO1mPP7XHf7YH+xkPOxiO/7aIP7bIv7dI/7eJf7gJutWO/7hKP7jKulIOve8nvWqhvi+gvB/T/ve2vi/k/7ZKv7gMv7gPf/72fKNbfnFfP7dafOdevnJtv/vcO1nXvnMmv/tnPrWtv7naP/wOPSfl/a2nf7jevKUYvKSbf3ZQv3fm/7olvCAYPCAbPGNYvjCkfOYbvzRcP7fd////////yH5BAEAAP8ALAAAAACABzgEAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqFOrXs26tevXsGPLnk27tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868ufPn0KNLn069uvXr2LNr3869u/fv4MOL/x9Pvrz58+jTq1/Pvr379/Djy59Pv779+/jz69/Pv7///wAGKOCABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSSTDbp5JNQRinllFRWaeWVWGap5ZZcdunll2CGKeaYZJZp5plopqnmmmy26eabcMYp55x01mnnnXjmqeeefPbp55+ABirooIQWauihiCaq6KKMNuroo5BGKumklFZq6aWYZqrpppx26umnoIYq6qiklmrqqaimquqqrLbq6quwxv8q66y01mrrrbjmquuuvPbq66/ABivssMQWa+yxyCar7LLMNuvss9BGK+201FZr7bXYZqvtttx26+234IYr7rjklmvuueimq+667Lbr7rvwxivvvPTWa++9+Oar77789uvvvwAHLPDABBds8MEIJ6zwwgw37PDDEEcs8cQUV2zxxRhnrPHGHHfs8ccghyzyyCSXbPLJKKes8sost+zyyzDHLPPMNNds880456zzzjz37PPPQAct9NBEF2300UgnrfTSTDft9NNQRy311FRXbfXVWGet9dZcd+3112CHLfbYZJdt9tlop6322my37fbbcMct99x012333XjnrffefPf/7fffgAcu+OCEF2744YgnrvjijDfu+OOQRy755JRXbvnlmGeu+eacd+7556CHLvropJdu+umop6766qy37vrrsMcu++y012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334Icv/vjkl2/++einr/767Lfv/vvwxy///PTXb//9+Oev//789+///wAMoAAHSMACGvCACEygAhfIwAY68IEQjKAEJ0jBClrwghjMoAY3yMEOevCDIAyhCEdIwhKa8IQoTKEKV8jCFrrwhTCM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';
        var s2='Qc5o1LGkH4Ec8kgcixQSSSabnPFGnZZ0Ukr+cnzRSgqV1DIs6KB0cqwtUfxyzIzC9JJMNNMMiUoTP1STIjZRUu5KLJ80886fHIuTTDzFfJPPPuP6c1BCOTyzTbwK3f/Rza7mTNHRHgOVdCUGDwV0UvAUnRJTszT1tNA9k6zwz1CJ/K7EU/3jdFWx+iqVSVbN+1THWMua9VY0X61y1Dd1FUlWCIGNtFZiGyPN0iaLzRTXR5X1illokfRVTmSHnJaj8x7MVlVniz2WV1K7hTTaBcXNilx06QQ3y0RBrdbUbSWMl11za+XrWhXrHTfd+PTVi1+Ag31XJnxRHbgzP91LuFF/id2r4A0bJi5g+CRmimKM5V3XTkYHhRjMhbNLkFuLOb3rYBdLnjhj6lT2iWWY0/v4V5RTrhlbI2UeeViXJZXt5oh71jBm5oTmiWikiwYa3o7D3bimEHXemV6j+6T/a2YFqx466di0folrsFnDGuenxxwbzqhbbtBDr6126+x+2+Yx7BjlboluvEcsO8qlg96b4BOfC5xku8N8u++sC9cv7yAVp5RxyB9DnOa/k518t8GP+5Ftx7cM7PK4O3cwcsRE/4h01E+uHFFB3V2dWhY135xw02fnCm71at8u9Yd1f4h34NHCHeSmewUd7SJtU5Jz32O//fjcm68t+Kul/4p67F+Dvszt9xt+UdtT05J569fe6nvBy28xe+HVb5V9+Pl+HeruNS7+vvHFz59n96cmrH7n9A8y8TufAMNDQATSb36iul+avmcm8eyPahLDHKZuA0CluY1seEpgdQx4/5YOhhB2DeRYuwj1QAjqTYIl7NaFDDcV9K3nhQxMnggn+EGC2FCHCFugC0l4qR/ScIWVmuENV8Ww8B2oh4lLovyct8Oc4PB9UKSidzCIvCB+CYV36lIK+TcpJWYujCY80hO1J8YqAk6KIExjG2OIRTI6LYtq5KLkOEg7Da4IjXi0lbTMV8A/tnGEazygIKH4RisuEUZbvKOrAkU+L7IlbWecY4RydriQGXJNhCyOJg95xURWElb1s2DvHsnH5amOPR5UZMUy+blVepIknLyeLEOIyI6AMnqt3CQYf+YzVJrRlPP6Yh9r9MrqEdOWxKMlG5eJQFyCKI7G4+UGgYnJa/8acY+OVCYSp5kvYZUunM+sYDOnSE7sRRN8rTshKY8IS18WM5B6GicL1WKtZalwZeiEozmdyc906lKa7PSYO9/5PJMFM5Z1S5U8n3XMfDJ0nwBdpz8LSVHgqVOdIjPoQWHIKkj6T6J10o4oDdRQ1aCUnxY9HUaDp1GBkoeRHmUlTb05z9Xsq6Tf9BtJUzpRcrK0pS7lHUyr2ayj2sheNQWpQnUqNqA6kaDg3JpxnipLoQ6VqKQzqknL2NFYjbGpDo1qcMqKP55a0qfKW6sms/q4rUauq2kFIl2FGFay5tGe9ZRhh/ZqTKT6NX2CteVbWRJXucZ0o2pLKvecpc14Qrb/qoNd3E3vabO5MbayhTWsVheJWEB69a6XbWdjmemtnaI2r5vlaGbROlULTba1rAVtbdtnWz2alnKipRVYlSVV1Up2d7sc7mvlQtXiypSwuGVuTZtLSbsC97il5e0s62Xc4P51uQpzbYZ0a9buSi25zyUvcMsrXKv877va8u1jFSiukNL2PeEdLWBjK1/u4ve8+6WjsfiLXdJCF7Zqmil8+2vg1S5WldOL4nqhOt756ve/E+ZhQSjMuukKOMNyjO6BzZUSCjp1gOwdXYOrq9n1kbjEF2ZxL9HT4l2dGMQxnW2HY9wwpvkrvgxWcYox3Kme8rhcEIZxkQdqYSOfZK4D/3Zge3VsTRyL2ME/FfJ7mXxSIttvxEnm8pGR3OUK2/jHQKaumAfpsopUbccKtqOPrbzhIa/4vlUG84VrWWelyvjMcCawkzs7SfSaOcJ09jCZBUboHrMZzyL83aLzLOj62peaeoayXP78rwTzec5b9i6lZedmgyHa0c/1zajLeWXLBpjDqI40WbwsvYqqOtWgDjWnW/3QQ9M6yDQ2NTQ92+tXSzrTeXKdpx/NTgEG29VSljVyL8drbtoas4oGNvXuVu1cTtmxxt61pjvdMfdlm9uGknC3xx1rYXtP14GlNrZTBxp3L9nbdWW1D+NYvlBCes/SVtfMoD3Mdncx4O6G3P/X4q3YfzenwHCGdb7r/WZ+93tyCf/lwOkZcYJj9DLYlnezm6xtZXMpzbobOcgdjvFpI47iybT4xVueca69rNodN/Sq531rXJdccZQxubjXvUiU5/jmxF25aH4O82cSG9g0T3eu/Nx0dBvttEOHeM8VHnTrnlt/WHe21pEeP0ybmunLLvPDb8zqwm1b30qW8yhVbnVxvlw4XP+6G9Pb67GLvOxUP/vQ5XZsvtu76BHs2+AlSfeur73ujD6X2BEO9/x6vZ9U9xq5JX9qyF+98Jn/luGNjvjF71Dvjs57zm3u8W/bWM2WV7zQOd/Xxno+tK//NO1DjzSoG7n0jd876qv/XnO1W8zFrc+63PVJ/JMDP3SXvuTtDal8Lu/+7r2HfurNHnL3Vtr3Yw480Jcm+wsyv/nOT+P2YSz9sJ+++r/Pvc71VXzk79b2sDc2+HMrfpGS/5PmZzH6L1bs+AM8/nO/FoK/6yu07vO+pLI/9cI/ZNK/WzpA/vI/pSsok3uV63K9ARS8AMy1AGRApnJAvoJAxpPA/aJAmaO+9kPAFeS53zKJNzo6t6u/+WM5ERxBEkwgECQgFNw4FSS71DLB5EsoGLwi0OstoNlBDbvBq8pBsDM+X3s9KNy6y/M5IRzCbNLA9eO+FvSjo1LCNWPCLHPCgJpC+OnBowHAKwyzNbTC/8gqQrg7QiT0NDBkNjE0QzI0Gxn8LzQ0uB8cPenawOA7pRmLQzw8vgR0wTbsmjvspjwswz08wcerQnW7wO8rpb4TxEzcQi1KwhrEpkZswkfMqDGURCmsw8axRNMiRBYEQu1yxUmLP1R8xVBsu1F8qXKbwEnswE3jRUVcRAJMJZzjvUD7vz80PbajxLirxbO6RdSRLTvbRWBkt2kUQE7UQkDjQE0sRGXUskTEvGukLGaERmfkqrbSxVP8xAxSxrHxHC4ExFnrwhmcxlmMx3GMxHIEG1E8rz6Et2MkxkAMRzjMRvaDxSD8xjmkR3U8vHskx3zMG5WisH68tn+cvoPcRv82XCgAE8hWhMdYBMZ6vMiGxMeHjBkc5EdpREgF9EVw5MhkdMSC9MiAlEcvpLSQnMmRvMmSxLKImrCJPCw1VEn5q0bWO8eYREaRpMmvqiad3MicbMqddKWTJK+fhCsLZEdQakanNEiclMmPs8mFbJ+nLMWozJj8M0WW1D6XxCdV7MbJw6UYhMq/uBa5PMqxxMiyRJfxQ0uizEi8XMm+/EWh5MaU/Ets5MqvRL66HMa7VMq8JBec4svBfMm0jDOsrEG3FEzDNMDJTLzNjDqvFK/GPMTHXL6zJLXCXMuEDMyWdEwTQ8oQ7MzhY00P7EzSpMXRdM26iwx9FKbyqspf67P/tqzMTWw0UKRNzVTN1fxM0AzNGstN4iQ9/0qaGpJM2eRM5qy16MQ+gLyXF4u27cRCxHQ6OlzMjoRO2CTDL8O96kTJdMzMyAvP20TE7FRL3QRM5pzPpERP5yRBg6DOIWou4Cw19bvP2bxO7UTO1jRQarRN8yxO/uzOR0QI9gxQ3BpQAhXOy4TPQctMOYSoL3xQwoxQBj04CoWZSELN9+TQ51RQN6zPBEXQopTRRHPQsEQoEh3PHLyogGkkAcVQ4/xIGl3Q/tRDyNPPZZRFJH3NHJXQPDwnvdQr2/pQbVTOlHPRF7VSEIXPJW0zJRXRfWtSH3TGO0sXVrxQXqNSz9TS/6Ec0tp00+RkU3PLzy59RzG1ylsMUjPNwtpaLDWNUTgVzyLtxCOtU++MPTClzDtNw3zMUGghwj71U0NdsPBszvRMTCx9Sxi1zA7805xa1BQsRzx9VEhFLE8d0Uwlukqd1LnMylN90+t8VcIDVaB8yFqNlrECLVkdyBulQrdk1c6rVEEd1C3ltl0dKVotU1G9VVxZKlM91sPUUba0OmAFz1Qd1kutSWOF1lRMVihdVopsVmfdKm7FzkAVTWGt1kPlUJJcUznV1HedVW/NodLkTh7VlOzSuHL1y3Nt0WtVV4C71izdVNP0xXYFL4CtVyrzw0/JPpc6WDslVneN1xklWP+14rx9jU+DzVgiSlSFRdZwVRQE01dFg1hY7deBlVYjZVGTPdlNFTVxZNGPnVNmrcgzRaeWtT5hXUdD7FWrEqic5dS0DFpfldmZddmaLdBcxVmirVKUpb+eNVrlwtimLdihrVr6FNij7cVQVVq8WimsRdWd/VlEStiKG9uULVGrpU2YDSCO3doG7VoN/TCmfVt+fVqELVuPLY/UxNu8dTBb9FethVuezNZ5pNugClsItVi3tVtstUibNcYlHNwHg5u25dm9JdyzhVx6y8BlCtwGNNti5FzcdNK5pVx7NVyuvTzQjVmp1dypVdnl9FysUtzzVFsU0yXR5Vvaa93VjU7/siRbx4VdqaTYShQ+zrLdxWVc4YXLzIUntE1b423ct/VdzPVZ4v1Uv73eKHMr6xWr59VZlg1fsZTa72Wi6j3f5iXf7I1N2Y3bEBOk4J3c6J27y41Y0hVS5q3Y101SAJpfRrzf9pW47f1bNJNf9aXf+vXfaNrd4yxg6d3fhXXcXFxfBx7gMMxf/FQZBBZg98Ve6AXSThJZaANgdMWgCrZgEMZgBobgCZa6Kkrh0B1e+/Vgu9RgTHXh1H1fVTVCE37hC2Zhe5ze3IVh0ZPhGQ5iXqVheOXhw9XhHZZYwfVQJK5c5RVi7u3fGq68I/5hBV7ggGXix02/qwTjKJZi6r3i/6lT4mBkYyx2WjPe4rbRoe2yQTUWOBsWXyK+WC2mrx523ioGYjd+Y7FlXzg2Yh304xC+445NYPwlY69V3dKF4gcW4ZBN4zwm5Ck25OUVmg5ySN71Yu0V5UOW5E1RxzqOXUdmTEpOYjHWZC8l5SK2m0RW5Ep+5UVmZGvEXUDd42jV4vCT5UIeZEuNY1i2Y2HOYlp+wlSm1EyW12e+YUjWX1/+ZWO+v2RW1FUGWV0+5li25eI1nTME5c3N5lYl59GV20g2XfCN5m4N5EdGXWyGZ28eZa0MZ3HOHqN05m3GY3rWY16mWSce4hXeSjbbRyv+53rmZnA+4XwmxX0uZ3PmZ/93lmbJjdwKxFGFbuSNZuVrHrZWXuh2RmeHfuhnvOd1bWaG7ud4zugyluc47eaPImk7hOkvJmZvPs0/rp13i8gWnujypel0HlOMVudgVumsZWmDlumjFmqRfuep3GSThkif/umODuqIBmmifumQHuOCNlegvl1cvmmmfuqRRmhMxjeqrmqXQ2lrdepJnubT7WqvBmaxbrmoXumwNuvZe8C0VuvezOtzZuuUdusMlusclmBtRurCzuqzbmg5Nmy+fmuN3GnrCWzBHuyebGzJ1mpGDUrFXuLOxurRJmul5mzHnmyJrmypbjiT9Ou23uxQzuya3up1xuGmRmuNlu1cLm3/zeZt1UZt2DZgA0LRvdRruPZsvObkmbZrImXseQZuhtTpyCbs4L7l44baD8KYbYJmmDRtyAbvi+bq0A5T3VZuPOzu6qbt6/7g7Fbh7d5T9fZu1kbvsm7T8l7bai5l3/bo8O5r6v7m4W7vw2bvzzMnXG1P4n5vi05t8Xbp20Zs0g7wBk/u3GbwYCVIAnfv+U5oQpqVFIVvDV/sDr/w/Ubfjx7EEe/k717tEnfxyNxwgo7xAPYnai4i7cbxmFbw2bbpWT5x/zbwCMZwGLfQ3jZyGedvGhdkWprWfK29saRsID/eFN/lcUzqUo3ur03yuxXGBW8mAn7yHL9HKQ/o351y/yUXQ+TO8sdeWi7fcR63Z5aaWDf/a2bMcLoeczPfz0Ys2hfUcjF/8zMmcn8WKoHeclW+cjzPb3zOc/7tcyYfVw5HdEEf9CWH6qzi45G1bCYUcDTX7z2fcfyr8U1/cD7lcklfczCv0T9vdDX39FBn9U+vcMNiK9ptc0qXcYeJdENH8QKk8leH9YFeSufu8lH/8l135VZP8kC36rcq3FIHdeaLbUcX8WGfcAfU81Qv8DckcIfF9Evzxm+H9myndkbv0CoH6z+z82Sf9FxX7V8H93CX9jon92kv9HPX2Go39kx33WYfah9t72gX9nVH93GX9X5f71gX2n3nd4tK9GXHdf+bmuxb5+hy1/d27+WHx3I0JvZ0J/E5L+l3N/U6uu4nY3bEvdKQ53hTtpyvxu+N5/SJl/huN+uT1/V43+BVP/Bih3IfB+gmp/ead/ehX+j43fCcL1YEp++F9/WGB/k1cvp6J/qbFemSwfmId/IP5/WO1/qnN+/4lvqZV3Y2z+mrR/p/V3oc8vB8l/mWt/i11/SpJ/uih+UDFviMJ9S4Z/tZN/ivH2b1gd9TN/G6J2RPxvuRP+Vks/Wet/auJ3jfUfnCB/Sqt/vDN/m5X1nAZvyPR/Zrh/vmmV0pne6y1+TVC+6xv/HO0fbHV/u2p/plFv2SL3J3NHqtwfzJV/2/07z/zvf8t2f53X/i2adoHTf9OYb3wfcUkmP31nf9pu9xx+nc4kfmEDf84Kf4gE/wnfvxz5f95lf40yfP6g9jJBfitEP+8dd+Lm5t3Bb/vxf17tX9S6d9Qs/e6Mf+2jfL8Gf/8QaIfwIHEixo8CDChAoXMmzo8GFCfxInUqxo8SLGihA3cuzokWDGkCJHkixp8mTGjypXsmzJESXMmDJd0nwo8yZOkTV38uzp8yfQoEId5ixq9CjKoUqXMm3q9ClPpFJPQq1q9ePUrFpJXu26FWPXsEu/XhRrlSzatGbXAk2Llu1Lt1/h0q1r9+5KuXr14u3r9y9gkHulBi7cczBiqoaj/8pd7Fgg38c7E1MuKfly5aKXIWfGufkz6NAIO5POKfo0atSlFaduLXh1YtcdG8um67a2R9iVcf/VzVW075G8hxOHGvy4zuLKlzNFXpa5audaoTNUS/3s2+sKpZPVbpu7xNbgJ3ovb37heO7n17OPKL395/Sm4XOeS19o9vv/5GvWH1a9bAD6NyBv/L1HIILKIZfgYwZaRqB9DE62FYMOmiShV8cRpyGGHW5moXMeiggcbCM6BqJGEk5nYksrYoiiRSxepRtzJcp4410wcogjj3511uOJDo44FZBYEWYiikVit5t2Pyr5ZFU67ggllTMOVmWQIeJ4FJYbccnjeF1auf8Xe4iJeaZPUi6IJptB3dZmlqQ9OR+c6HkGpW91Ztidftbp+aeXak4JKKFGflkoZmSeCROi2zGKZmyNmnVkhZRKeulrguaJKafVJdWpeP0VKhyo7oXUKJGl5vjplqyqKqmmWr46K6212norrrnquiuvA8V6YK/BCjssscUaeyyyyeL1q6zKOvsstNFKOy211QLKLLDWarstt916+y244fqIbbbimnsuuumquy670JIrYLvxyjsvvfXae++Q75aLL7/9+vsvwAELLJa+4A18MMIJK7www/8WbHDDEUs8McUVW7zrwxBfvDHHHXv8McgvZqxxyCWbfDLKKavc28hhrvz/MswxyzwzzQ21nF7NOeu8M889M3wzzj4LPTTRRRttLdDyHb000007/fSlSSsNNdVVW3011ipKHXTWXXv9Ndhhg7Y1f2KbfTbaaautFNkGrv023HHLPfd+bU9NN95567033337/TfggQs+OOGFG3444okrvjjjjTv+OOSRSz455ZVbfjnmmWu+Oeede/456KGLPjrppZt+Ouqpq7466627/jrsscs+O+2123477rnrvjvvvfv+O/DBCz888cUbfzzyySu/PPPNO/889NFLPz311Vt/PfbZa7899917/z344Ys/Pvnlm38++umrvz777bv/Pvzxyz8//fXbfz/++eu//z///fv/PwADKMABErCABjwgAhOowAUysIEOfCAEIyjBCVKwgha8IAYzqMENcrCDHvwgCEMowhGSsIQmPCEKU6jCFbKwhS58IQxjKMMZ0rCGNrwhDnOowx3ysIc+/CEQgyjEIRKxiEY8IhKTqMQlMrGJTnwiFKMoxSlSsYpWvCIWs6jFLXKxi178IhjDKMYxkrGMZjwjGtOoxjWysY1ufCMc4yjHOdKxjna8Ix7zqMc98rGPfvwjIAMpyEESspCGPCQiE6nIRTKykY58JCQjKclJUrKSlrwkJjOpyU1yspOe/CQoQynKUZKylKY8JSpTqcpVsrKVrnwlLGMpy1nSsv+WtrwlLnOpy13yspe+/CUwgynMYRKzmMY8JjKTqcxlMrOZznwmNKMpzWlSs5rWvCY2s6nNbXKzm978JjjDKc5xkrOc5jwnOtOpznWys53ufCc84ynPedKznva8Jz7zqc998rOf/vwnQAMq0IEStKAGPShCE6rQhTK0oQ59KEQjKtGJUrSiFr0oRjOq0Y1ytKMe/ShIQyrSkZK0pCY9KUpTqtKVsrSlLn0pTGMq05nStKY2vSlOc6rTnfK0pz79KVCDKtShErWoRj0qUpOq1KUytalOfSpUoyrVqVK1qla9KlazqtWtcrWrXv0qWMMq1rGStaxmPSta06rWtbK1rW7/fStc4yrXudK1rna9K17zqte98rWvfv0rYAMr2MEStrCGPSxiE6vYxTK2sY59LGQjK9nJUraylr0sZjOr2c1ytrOe/SxoQyva0ZK2tKY9LWpTq9rVsra1rn0tbGMr29nStra2vS1uc6vb3fK2t779LXCDK9zhEre4xj0ucpOr3OUyt7nOfS50oyvd6VK3uta9Lnazq93tcre73v0ueMMr3vGSt7zmPS9606ve9bK3ve59L3zjK9/50re+9r0vfvOr3/3yt7/+/S+AAyzgARO4wAY+MIITrOAFM7jBDn4whCMs4QlTuMIWvjCGM6zhDXO4wx7+MIhDLOIRk7jEJj4x/4pTrOIVs7jFLn4xjGMs4xnTuMY2vjGOc6zjHfO4xz7+MZCDLOQhE7nIRj4ykpOs5CUzuclOfjKUoyzlKVO5yla+MpazrOUtc7nLXv4ymMMs5jGTucxmPjOa06zmNbO5zW5+M5zjLOc507nOdr4znvOs5z3zuc9+/jOgAy3oQRO60IY+NKITrehFM7rRjn40pCMt6UlTutKWvjSmM63pTXO6057+NKhDLepRk7rUpj41qlOt6lWzutWufjWsYy3rWdO61ra+Na5zretd87rXvv41sIMt7GETu9jGPjayk63sZTO72c5+NrSjLe1pU7va1r42trOt7W1zu9ve/ja4w2Mt7nGTu9zmPje6063udbO73e5+N7zjLe9507ve9r43vvOt733zu9/+/jfAAy7wgRO84AY/OMITrvCFM7zhDn84xCMu8YlTvOIWvzjGM67xjXO84x7/OMhDLvKRk7zkJldIQAAAOw==';
        document.getElementById("header1").src=s1+s2;
    });

    filterSelection("all")

    function filterSelection(c) {
      var x; 
      var i;
      x = document.getElementsByClassName("fDiv");
      if (c == "all")
      {
           c = "";
      }
      
      for (i = 0; i < x.length; i++) {

        removeCharity(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addCharity(x[i], "show");

      }
    }


    function addCharity(element, name) {

      var i;
      var arr1;
      var arr2;

      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {

        if (arr1.indexOf(arr2[i]) == -1) {

          element.className += " " + arr2[i];

        }
      }
    }

    function removeCharity(element, name) {

      var i;
      var arr1;
      var arr2;
      
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");

      for (i = 0; i < arr2.length; i++) {

        while (arr1.indexOf(arr2[i]) > -1) {

          arr1.splice(arr1.indexOf(arr2[i]), 1);

        }
      }
      element.className = arr1.join(" ");
    }


    var btnContainer = document.getElementById("buttonCon");
    var btns = btnContainer.getElementsByClassName("btn");

    for (var i = 0; i < btns.length; i++) {

      btns[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
     
    });
    }

    $("#Search").on('click',function(){
            const article = document.querySelector('#myDropdown');
            filterFunction();
            var id=article.dataset.onshow;
            if(id!= "show"){
                document.getElementById("myDropdown").classList.toggle("show");
                article.dataset.onshow="show";
            }
    })

    function filterFunction() {
      var input, filter, ul, li, a, i,count;
      input = document.getElementById("Search");
      filter = input.value.toUpperCase();
      filter2= input.value;
      div = document.getElementById("myDropdown");
      count=0;
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && count!=5) {
          a[i].style.display = "";
          count++;
        } else {
          a[i].style.display = "none";
        }
      }
      if(count==0){
        document.getElementById("dissapear").style.visibility="hidden";
      }else{
        document.getElementById("dissapear").style.visibility="visible";
      }
    }

    function findSpecific(value){
        var n=value.innerHTML;
        var ar= current.href;
        if(ar.includes("true")){
            if(n=="T-shirts"){
                n="t-shirt";
                $(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else if(n=="Bags"){
                n="bag";
                $(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else if(n=="Shoes"){
                n="shoe";
                $(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else if(n=="Skirts"){
                n="skirt";
                $(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else if(n=="Coats"){
                n="coat";$(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else if(n=="Jeans"){
                n="jean";
                $(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else if(n=="Hoodies"){
                n="hoodie";
                $(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else if(n=="Tops"){
                n="top";
                $(location).attr('href', window.location.href +'/Products/ProductName/'+n);
            }
            else $(location).attr('href', window.location.href +'/Products/ProductName/'+n+'/fullview/'+n);
        }
        else{
            if(n=="T-shirts"){
                n="t-shirt";
                $(location).attr('href','/Products/ProductName/'+n);
            }
            else if(n=="Bags"){
                n="bag";
                $(location).attr('href', '/Products/ProductName/'+n);
            }
            else if(n=="Tops"){
                n="top";
                $(location).attr('href', '/Products/ProductName/'+n);
            }
            else if(n=="Shoes"){
                n="shoe";
                $(location).attr('href', '/Products/ProductName/'+n);
            }
            else if(n=="Skirts"){
                n="skirt";
                $(location).attr('href','/Products/ProductName/'+n);
            }
            else if(n=="Coats"){
                n="coat";
                $(location).attr('href', '/Products/ProductName/'+n);
            }
            else if(n=="Jeans"){
                n="jean";
                $(location).attr('href','/Products/ProductName/'+n);
            }
            else if(n=="Hoodies"){
                n="hoodie";
                $(location).attr('href','/Products/ProductName/'+n);
            }
            else $(location).attr('href','/Products/ProductName/'+n+'/fullview/'+n);
        }
    };
