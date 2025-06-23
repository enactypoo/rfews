var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

let currentMember = null;

function showMember(member) {
    const memberInfo = {
        'Ace': {
            'name': 'Ace',
            'image': 'gangsters/ace.jpg',
            'description': 'ace of spades',
             'songIndex': 0
        },
        'Hix': {
            'name': 'Alex',
            'image': 'gangsters/alex.jpg',
            'description': 'xo',
            'songIndex': 1
        },
        'Enact': {
            'name': 'Enact',
            'image': 'gangsters/enact.png',
            'description': 'i ageplay #cnclover',
            'songIndex': 2
        },
        'Rifle': {
            'name': 'Rifle',
            'image': 'gangsters/rifle.jpg',
            'description': 'meow',
            'songIndex': 3
        },
        'Red': {
            'name': 'Red',
            'image': 'gangsters/red.jpg',
            'description': 'x_x',
            'songIndex': 5
        },
        'Sanity': {
            'name': 'Sanity',
            'image': 'gangsters/sanity.jpg',
            'description': 'random loser bitch',
            'songIndex': 4
        }

    };
    const info = memberInfo[member];
    if (!info) return;

    const memberDiv = document.getElementById('member-info');
    const selectedElement = document.querySelector(`[onclick="showMember('${member}')"]`);

    if (currentMember === selectedElement) {
        currentMember.style.color = '';
        document.getElementById(`${currentMember.getAttribute('data-member')}-dot`).innerHTML = '::';
        memberDiv.innerHTML = '';
        currentMember = null;
        playDefaultSong();
        return;
    }

    if (currentMember) {
        currentMember.style.color = '';
        document.getElementById(`${currentMember.getAttribute('data-member')}-dot`).innerHTML = '::';
    }

    selectedElement.style.color = '#392c75';
    currentMember = selectedElement;
    selectedElement.setAttribute('data-member', member);

    document.querySelectorAll('.yellow').forEach(dot => {
        dot.innerHTML = '::';
    });

    document.getElementById(`${member}-dot`).innerHTML = '<span style="color: #392c75; margin-top: -2px;">&bull;</span>';

    memberDiv.innerHTML = `
        <img src="${info.image}" class="fade-in" style="height: 120px;" draggable="false" >
        <p style="margin-top: 5px; margin-bottom: 0; color: #392c75;">[ ${info.name} ]</p>
        <hr style="border-top: 1px solid #392c75; margin: 3px 0;">
        <p class="glitch" style="margin-top: 5px;">${info.description}</p>
    `;

    changeSong(info.songIndex);
}

}