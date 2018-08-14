$(function() {
    $( "#plexdialog" ).dialog({
      height: 500,
      width: 500,
      modal: true,
      autoOpen:false,
      buttons: {
        "打开": function() {
            window.location.href='http://chunsiyang.myddns.me:32400';
            },
        "关闭": function() {
            $(this).dialog('close');
            }
        }
    });
    $( "#plexinfo" ).click(function() {
        $( "#plexdialog" ).dialog( "open" );
      });


    $( "#nextclouddialog" ).dialog({
    height: 500,
    width: 500,
    modal: true,
    autoOpen:false,
    buttons: {
        "打开": function() {
            window.location.href='http://chunsiyang.myddns.me:20288';
            },
        "关闭": function() {
            $(this).dialog('close');
            }
        }
    });
    $( "#nextcloudinfo" ).click(function() {
        $( "#nextclouddialog" ).dialog( "open" );
    });


    $( "#omvdialog" ).dialog({
    height: 500,
    width: 500,
    modal: true,
    autoOpen:false,
    buttons: {
        "打开": function() {
            window.location.href='http://chunsiyang.myddns.me:10280';
            },
        "关闭": function() {
            $(this).dialog('close');
            }
        }
    });
    $( "#omvinfo" ).click(function() {
        $( "#omvdialog" ).dialog( "open" );
    });


    $( "#vspheredialog" ).dialog({
        height: 500,
        width: 500,
        modal: true,
        autoOpen:false,
        buttons: {
            "打开": function() {
                window.location.href='http://chunsiyang.myddns.me:10180';
                },
            "关闭": function() {
                $(this).dialog('close');
                }
            }
    });
    $( "#vsphereinfo" ).click(function() {
        $( "#vspheredialog" ).dialog( "open" );
    });


    $( "#asusrouterdialog" ).dialog({
        height: 500,
        width: 500,
        modal: true,
        autoOpen:false,
        buttons: {
            "打开": function() {
                window.location.href='http://chunsiyang.myddns.me:8443';
                },
            "关闭": function() {
                $(this).dialog('close');
                }
            }
    });
    $( "#asusrouterinfo" ).click(function() {
        $( "#asusrouterdialog" ).dialog( "open" );
    });


    $( "#ipmidialog" ).dialog({
        height: 500,
        width: 500,
        modal: true,
        autoOpen:false,
        buttons: {
            "打开": function() {
                window.location.href='http://chunsiyang.myddns.me:10080';
                },
            "关闭": function() {
                $(this).dialog('close');
                }
            }
    });
    $( "#ipmiinfo" ).click(function() {
        $( "#ipmidialog" ).dialog( "open" );
    });


    $( "#downloaderdialog" ).dialog({
        height: 500,
        width: 500,
        modal: true,
        autoOpen:false,
        buttons: {
            "打开": function() {
                window.location.href='http://chunsiyang.myddns.me::9001';
                },
            "关闭": function() {
                $(this).dialog('close');
                }
            }
    });
    $( "#downloaderinfo" ).click(function() {
        $( "#downloaderdialog" ).dialog( "open" );
    });


    $( "#aria2dialog" ).dialog({
        height: 500,
        width: 500,
        modal: true,
        autoOpen:false,
        buttons: {
            "打开": function() {
                window.location.href='http://chunsiyang.myddns.me:9100/';
                },
            "关闭": function() {
                $(this).dialog('close');
                }
            }
    });
    $( "#aria2info" ).click(function() {
        $( "#aria2dialog" ).dialog( "open" );
    });

    $( "#yyetsdialog" ).dialog({
        height: 500,
        width: 500,
        modal: true,
        autoOpen:false,
        buttons: {
            "打开": function() {
                window.location.href='http://chunsiyang.myddns.me:3001';
                },
            "关闭": function() {
                $(this).dialog('close');
                }
            }
    });
    $( "#yyetsinfo" ).click(function() {
        $( "#yyetsdialog" ).dialog( "open" );
    });
  });
