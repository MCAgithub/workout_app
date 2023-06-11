'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "857d1d003027db74eccf9b64aff02670",
".git/config": "5edd6f26ee2684dcf4daf239e085acfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "31eb7f76607c4478934214f5d9fbcaae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "821ede85bd915d9f4973517b6576bfa6",
".git/logs/refs/heads/main": "9b97fbea70f1b1c498d7b51dd4a7160e",
".git/logs/refs/remotes/origin/main": "4a164c554abf97be4b9cef4e6584e956",
".git/objects/00/39672172ddbd37f11a0cb247457b0e889d80c9": "55156ae7135272222147e59f0aa9cf6b",
".git/objects/01/13b347fb3bab5e93961f56fa952ceebdfb7085": "b570d05f7a6223d672e16a1359633caf",
".git/objects/02/e9234b3b15e59feb5644411c946d485c0c18f6": "b09c867ea8c855e9b99e4362cbc5d885",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/479a57d6e059784a4e18d0790e20ae07e2e263": "00aa463bb859647c0277fab1838667a9",
".git/objects/05/d94f6c08d36471c63b0a76c8d53cb991a980b3": "355fc897a952952834e8be4f06ae97fc",
".git/objects/09/e65d322c5c413e3edccaa28585178aed5cbb92": "aec8a7ba9c1275d4a01dd3115111ba4d",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/1b71c2400b02626ae3b3267f475dc3b8ec4f12": "f52feaf69a345fd30171ea3ff5fd50e2",
".git/objects/11/a79a53e276d04a8e00c542a257b5f285cfdfe0": "1cb79ec33adb6f443a12bb79bf8ff50d",
".git/objects/1a/efbc15bdc6e9552b99daadabb28e0c321c3b66": "9d2f98d3775a50378b72dbeef74d26c2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/24/22ee2b6f394e65b4de2f822b1a5cb3480b2d15": "15000b85a4b6ed2cf57fa65e9c88c090",
".git/objects/26/a5ae3df9b7505ad224f11245872c54e1394b97": "9e5e0d309b9d3e1b6f0169ace576076c",
".git/objects/28/2d1a49c7f2b582349504b437ac3ae419b69340": "10dcb7795ab981f25e6c05f93bc6d1d0",
".git/objects/2c/3931cbb2234d7368d744e18d8582cf412ebb8a": "7d3e6ce795ad900af5a5443b0cc781a8",
".git/objects/2d/83c43d87d6bcdfd289efe6f5f43e6ed1e8c747": "00d1bdae4525a3ec9637a03e006e24d7",
".git/objects/2f/0011ed659354207f67cb0e572a4f40b19e52e1": "2316b0ae8d448cf94611dfe33ce61fa1",
".git/objects/31/e6a762d4672e5b26a3546c3a6a6e1f89b9d134": "20bc1c8eb51a184925e20eb507f1fd2c",
".git/objects/33/fd61b78977df4b16f8ec0a81a5ce3738bfbaf7": "2d2fc27d2ae3ec6f9c13145e99bb3e63",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/588a642cebf20feea100b27df59c1bdcf333b2": "edfae0673d06fa0d2f62ba447e4fabcc",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/14a5f4f6cb697b29547878354078ce78bf31a9": "e36b2363e7f1d777c91af0579c7a112b",
".git/objects/39/8e86bedc0afccc6be6bc1c30dea56b0d482c6d": "eaf80dc8a9ff85d3e6112011fed39eed",
".git/objects/39/91be5cc39fcf46cd1b8b3dcf5c94c1ae352a2f": "862cd87f86b3efbf0880580a71c65449",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/3c/a0a28a20ea206cd3b7ed35d293a4ea4c1f5e9e": "a6fd24d2b9d6df57801d8c94f275347a",
".git/objects/44/c24d107f15ed5ab0be21d4d5bb3001913d3cab": "25143f947e2278ea209522d03c5c2c10",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/45/984d6eccca2e64db49c3aae0e9e88ab5baa94c": "bf667d246fd66e8344b855331720dc35",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c14f997ebf3ded67953d997acb31df84cacc84": "d053b98151a8badedae2e320faad8cdd",
".git/objects/4d/2ccc3e1d50e723a0b83379151a40276e76deec": "ac4f7e77dcff48162bb6bc9903b963e8",
".git/objects/4d/4e09fbbd5059ef9bd4ae6f456c7738f253ba48": "0b45e9895d7f59c0b5d547418708b985",
".git/objects/4d/fc0a9b85db16b759dc2a4e071a66ffde0240eb": "625dae5c696e5012f700aeeed17a3c2d",
".git/objects/4f/65fed88673a77066666fcd4b5654fd3e3ef40a": "facefc95e8630f57ad48f476637baa14",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/8a0853eb47e682d5e479623df6c870b0e7641b": "a4bf7a6acac59c522e82001a22ceca91",
".git/objects/54/f426365d2ddf4da93e518b552c9204d59bdeaa": "d08ff5c612642a5cd575e4a15fa89139",
".git/objects/58/259acb99b17aadd9a9cacba40cd154a83ccb3a": "5fd4a77c34c4b09acc3ddc899e76c438",
".git/objects/5a/1886aba43eb60417b652c6c0da60366feb0831": "aeddc7cbe66acf094d3146629e1ac6de",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/61/7ea3ac26177b670e0350b02b1e49d905a8d018": "3e34f3ddc88c2d9d66b02a11aa91bf20",
".git/objects/62/304bbbaac65e9949a0af9d04f7fda1b70d4ed0": "3f4a4852526ed1c76887878be7c53e8f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/cec8235375b036d0c6373bebc005850aa6ae4e": "48bcc6e7787acf576ccc1e5a65efa6db",
".git/objects/6a/006f9928c83ee1d58a38c5030d69b7a10580d1": "8a2d77df44e57a2cdafbc308b1706b5c",
".git/objects/6d/3e782448dbf737946a53395a6b1934f2b02cf2": "0e6e5e37792ef3d607e29bab4f0a1449",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/b73b775c2de9b76670e1bffd127ccbc48f309c": "008568832451117577ec68f188abed5f",
".git/objects/70/bc1d00a5d29489082c1e8e06fd54e75f8cb82f": "3082ab806922d8b0c5538ea78abc0f64",
".git/objects/74/c8e874dae09fd05cbb3891665240a7cd2a5abe": "4c69cc065cf2cda70e790f7a02e4ae5f",
".git/objects/75/e6c556e0e88ffae7a265f253d15c3985c976bc": "e1e36365f39dcf48d885d3dc49d3d56d",
".git/objects/77/672ddace2f1001cee3ee67e57dd374c0ba4f61": "dabe3c1dfe7060f3690cc7a1f6354e75",
".git/objects/79/1745a73903dabad3369d28fb5764de36ce138b": "0e360ff67432641be5893132cacab72e",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7d/7e967409edafbdf905cc4a9c489b16fce161d2": "965afca0244bb8ba92dee39070afde98",
".git/objects/7e/6bb8394ac07dbd6be975e134a8f5304bc34595": "63cd516399ccd23c92d959fa87882633",
".git/objects/7f/69e9bbd67cef82e52b81e985cdb989b4bbebe3": "b446a404f22d1b022336d57f95bfc7ea",
".git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "d3fd06a4b3821134ad7857a2861d0f57",
".git/objects/86/a94c39ae9337f8b91960253f9b495c35526748": "a34df0978c513dffded548c3544c0984",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a57d3640510f2fac54026ce6f09883b4c509b1": "e8708c43c6c9c11018827fc1e99a02c9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c173fca25b329f7dd6216e8bbdb0ad05a00af6": "8c133503c526efa2cff5726614cfcb7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/f621d3573fdafe1edec9fa27d8fc915f8752e2": "c460484e22db6905ac5ef00e5e3351c1",
".git/objects/91/56481995fbf1231dfaf1fd715d4b3c02cc042b": "8dc24ad76762b01fde46c79e7265ffe4",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/94/a3c5ce70cddcab6596d9d768e204bec97e0cfc": "297f70bfceff906a8065cfdd3245b99d",
".git/objects/97/2e2c07fa67239c99e968fb33a6a6f6dbf8bd12": "dfe19c25e64b54d6e19dbbfe69557549",
".git/objects/9c/74513649e35467dd4d4847fdf65a859d13200c": "5c503a8e1eb081fde74d97703865d73e",
".git/objects/9d/633e97d8976da9648dbe2255055ee06bdbacef": "a8763a8b33f8a33ff72267760d76c697",
".git/objects/a1/0b0ef6cf5cacb7519b726daf6f6964d724d0ee": "d6b2d2feb8f41650de32d0088fe45896",
".git/objects/a1/7d0fd29e067539690070deef913b5c9f69357b": "57272e337a25243926971098cdb95754",
".git/objects/a2/3ae2d9a0d0a92a8a8073dcd03f0a560028a0a6": "c91785329b395fda5f03b0fc65e8f614",
".git/objects/a2/45a1396052a589e14e3bec52e9f376aa9313ad": "d1a38966b84cd12d32b7abf4328a1072",
".git/objects/a2/5ea5b8816bad1fee98ec9a1f0e0bc749771361": "b6587767dcf5520f35a20b3e879e1164",
".git/objects/a4/a6827760036c047da39915143e8f77b83333bf": "3f16b3ca0294ccd1d92927c1f278870f",
".git/objects/a7/9bc63128cca1c5b905a61232c8836fbb679f7a": "ad4ddbaf69c8bf17bee5112284be5462",
".git/objects/ad/fa0f5e0e8e1bae4c8a871a2aeb62af501ace2a": "9c0580a3c51536122375da0fecf86bf6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/1bdbd9fef1fba6f80c10a7724b66a0e817d372": "b0ac61e4fee7f067a81f6b80f292788c",
".git/objects/b1/a82866ee05bcc3bbe4770c6466203bcdd18a3b": "61528e31f1138cc3468078c0a040e60d",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/f0892f56ca82895290f26f06149bd9831641db": "ee3cb252c6cbd6f905dddfe963ee35a3",
".git/objects/b5/65fd91e66a6aa642f896c9d347b3b4880954de": "08281b71da8b552d1d741038ae1d4612",
".git/objects/b5/85661002ae57399ad2dd03c0f86f575c086648": "d281b460c3cd1b16adcece6e35e871e6",
".git/objects/b6/ef574275433b6af52dc3551d5fce69fea78795": "ef4277824c1961cd6f515a000c57be14",
".git/objects/b6/f2b39e24d862353bada32e73490feffecb5fbf": "350c982138a4754b2b0711186953d455",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/cb75c2480f2d2adb2f66cbee6fd387c3f2662f": "adc46461892a32e48c90a1943b1127f4",
".git/objects/bc/3f38093ca1eb2cf3b494bc0169df1ccdb52f35": "4b0c4c5ebe17987c21fe969b8667f7ec",
".git/objects/bd/56a6c76d0a2abf000d6242a806b4675595bd84": "ea5d7538708502daca6e1b187a455105",
".git/objects/c0/7f2c2ac7b7dcc3fd71cc9617ff42c17c9c3d46": "25a1e82e26aa055139dc548527989c4c",
".git/objects/c6/6a7a048022c856389e26ab4999c70100c762b2": "6cce1b95c45f4e80cc5525d68ae96da3",
".git/objects/c6/83de36dd39e2c0c730d6762277432bb92b7609": "ea310d38fbe5cf28a2387c5d2b728359",
".git/objects/c8/6c6cada95d7ec2e56fb420d2d867236329d483": "c1a44a33f470c2b86d662059ee58fac8",
".git/objects/cc/767a47c761d405c177dc2017518de40f1fe5bf": "3a024b0b09922848024acbc5921370e7",
".git/objects/cd/1e97150b982342c48f1339372d47189d50c23e": "1850d81d11b1e9fc8479afd6ca6fa64e",
".git/objects/cf/e6bf637f7e3b924865980862c05e12baca0ec7": "8cab95c8f142d6a91761c61c96ae4857",
".git/objects/d0/cdc69cf089a3bea104aa221b418825fbff8a80": "f7c7a2660c6d2a006cd254213a3636e2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/da027bef7caa510b4a40d30ce6ec71cdc7f93c": "b191fb9756156ac73f44701cb0a9c3f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/db/287ea55273e5eac23a64c053c6f7397f495a07": "15868faf6547f5c3c84dd3691aff107d",
".git/objects/dd/0895a37442b800629250cf98d2d01391b367fd": "fc7ff1d1ff44e2e842d28e7da1c2844e",
".git/objects/df/46a441368a20ba85a52ad9ebe75db14a3232c8": "74eb995b626a024ea4503330eee39337",
".git/objects/df/e3d970fd986d96d0268c1b1623548030c84a30": "ef0544a8c3af0eb26f8803669a361795",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e1/72599b657f4ba698c7dc78c92468acda6b5c5c": "abf2424a960dc059c7ea6b13666c33c1",
".git/objects/e4/68b3e80fdec07446886290e86081953b2fa1d8": "3972d70e6ff67f6dd6741d4c290fde01",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/a58e8f6d6ef9fbade6c4903537a40428381367": "3856491ffffba37f7da11ae50fd7842d",
".git/objects/ea/34edf69db4b2dec211c61f640732697598da04": "1f40941a988a2309bca0fce7cd256544",
".git/objects/ea/9e8a251250aa4840d9f9ac883bd86b824292e5": "01988e6c267572a1b0e3d80878997edd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1e37d7a37d00a1a7a67faad6fb1c0ddcd94fd4": "116345d38bf6fe9e95d45f0908bae159",
".git/objects/ee/1a140a1759d85f5e3f2d3812ea4107abb8120e": "68efe51a2ae477ec33e3894b5bb3e3f6",
".git/objects/f0/d3c6d0693ce8875437a06b5b27e4057db7a2d4": "885fa8dad7ab0dd2870211cd155c5b9c",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f7/1abd5fdd5044fe488c55010b1424795a79eae8": "bdd364b2feb8fe1ad4609039bb2cf5f8",
".git/refs/heads/main": "c21ee184099e1308cf1cc9ed6625eb1a",
".git/refs/remotes/origin/main": "c21ee184099e1308cf1cc9ed6625eb1a",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/AssetManifest.smcbin": "df373ac5351e0214f42e3a82b5014697",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "8e0e818bc3aa338af0ddbe1ed12062a9",
"assets/NOTICES": "d096a5bff3c7876f70cd5a7f878d5cc4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e54729c0789565d660b019789908d557",
"/": "e54729c0789565d660b019789908d557",
"main.dart.js": "84b37aea44617022a3c2fe9419d3e8ce",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"version.json": "b3b87f9153d4406c14bc11865bbe1089"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
