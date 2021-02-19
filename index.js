const _0x545e = [
  ".js",
  "run",
  "slice",
  "2065pjBDBe",
  "get",
  "forEach",
  "1SNeAth",
  "split",
  "channel",
  "guilds",
  "endsWith",
  "readdirSync",
  "Client",
  "330131yFBFTv",
  "─────────────────────────────────────",
  "log",
  "commands",
  "delete",
  "login",
  "Discord\x20=\x20749955749462933554",
  "filter",
  "772866eWxbWI",
  "send",
  "guildDelete",
  "setStatus",
  "shift",
  "name",
  "ADMINISTRATOR",
  "38WykOEx",
  "Connecté\x20sur\x20",
  "Bot\x20by\x20(0x38)\x20Space",
  "invisible",
  "set",
  "toLowerCase",
  "colors",
  "aliases",
  "[CONSOLE]\x20Left\x20",
  "Online",
  "size",
  "./cmds/",
  "help",
  "469037MrjMMa",
  "deletable",
  "generateInvite",
  "cache",
  "\x20Loaded\x20command\x20=>",
  "248XRPjmC",
  "2ULQkYK",
  "startsWith",
  "[CONSOLE]\x20",
  "white",
  "1205818GtHRWq",
  "red",
  "1QdpeCh",
  "find",
  "282290SUHhDD",
  "message",
];
const _0x4923 = function (_0x280368, _0x4b400a) {
  _0x280368 = _0x280368 - 0x1ce;
  let _0x545ecb = _0x545e[_0x280368];
  return _0x545ecb;
};
const _0x56560b = _0x4923;
(function (_0x26e0d4, _0x180f50) {
  const _0x38628e = _0x4923;
  while (!![]) {
    try {
      const _0x2bef32 =
        parseInt(_0x38628e(0x1db)) * parseInt(_0x38628e(0x206)) +
        parseInt(_0x38628e(0x1f4)) * parseInt(_0x38628e(0x1ce)) +
        parseInt(_0x38628e(0x1d6)) +
        parseInt(_0x38628e(0x1ed)) * -parseInt(_0x38628e(0x1de)) +
        -parseInt(_0x38628e(0x201)) +
        -parseInt(_0x38628e(0x1e5)) +
        -parseInt(_0x38628e(0x1d4)) * -parseInt(_0x38628e(0x1d2));
      if (_0x2bef32 === _0x180f50) break;
      else _0x26e0d4["push"](_0x26e0d4["shift"]());
    } catch (_0x1d7e9d) {
      _0x26e0d4["push"](_0x26e0d4["shift"]());
    }
  }
})(_0x545e, 0x688ee);
const Discord = require("discord.js"),
  fs = require("fs"),
  { red, white } = require(_0x56560b(0x1fa)),
  {
    prefix,
    token,
    owner,
    discord,
    message,
    channel,
    role,
  } = require("./data.json"),
  client = new Discord[_0x56560b(0x1e4)]();
client[_0x56560b(0x1e8)] = new Discord["Collection"]();
const loadCommands = (_0x497788 = _0x56560b(0x1ff)) => {
  const _0x45c758 = _0x56560b;
  fs[_0x45c758(0x1e3)](_0x497788)[_0x45c758(0x1dd)]((_0x34007c) => {
    const _0x233f03 = _0x45c758,
      _0x4f27e5 = fs[_0x233f03(0x1e3)](_0x497788 + "/" + _0x34007c + "/")[
        _0x233f03(0x1ec)
      ]((_0x2420b4) => _0x2420b4[_0x233f03(0x1e2)](_0x233f03(0x1d8)));
    for (const _0x48989f of _0x4f27e5) {
      const _0x30d525 = require(_0x497788 + "/" + _0x34007c + "/" + _0x48989f);
      client[_0x233f03(0x1e8)][_0x233f03(0x1f8)](
        _0x30d525[_0x233f03(0x200)][_0x233f03(0x1f2)],
        _0x30d525
      ),
        console[_0x233f03(0x1e7)](
          "[COMMANDS]\x20"["red"] +
            _0x233f03(0x205)[_0x233f03(0x1d1)] +
            ("\x20" + _0x30d525["help"]["name"] + _0x233f03(0x1d8))[
              _0x233f03(0x1d3)
            ]
        );
    }
  });
};
loadCommands(),
  client["on"]("ready", async () => {
    const _0x3a158f = _0x56560b;
    console[_0x3a158f(0x1e7)](
      _0x3a158f(0x1d0)[_0x3a158f(0x1d3)] +
        (client["user"]["username"] + ":\x20")[_0x3a158f(0x1d1)] +
        _0x3a158f(0x1fd)[_0x3a158f(0x1d3)]
    ),
      console["log"](_0x3a158f(0x1e6)["red"]),
      console[_0x3a158f(0x1e7)](
        (_0x3a158f(0x1f5) +
          client[_0x3a158f(0x1e1)][_0x3a158f(0x204)][_0x3a158f(0x1fe)] +
          "\x20serveurs")[_0x3a158f(0x1d1)]
      ),
      console[_0x3a158f(0x1e7)](_0x3a158f(0x1e6)[_0x3a158f(0x1d3)]),
      console[_0x3a158f(0x1e7)](
        ("Prefix\x20=\x20\x22\x20" + prefix + "\x20\x22")["white"]
      ),
      console["log"](_0x3a158f(0x1e6)[_0x3a158f(0x1d3)]),
      console[_0x3a158f(0x1e7)](_0x3a158f(0x1f6)["white"]),
      console["log"]("─────────────────────────────────────"["red"]),
      console[_0x3a158f(0x1e7)](_0x3a158f(0x1eb)[_0x3a158f(0x1d1)]),
      console[_0x3a158f(0x1e7)](_0x3a158f(0x1e6)[_0x3a158f(0x1d3)]),
      console[_0x3a158f(0x1e7)](
        "github.com/Space0x38\x20for\x20updates"["white"]
      ),
      console[_0x3a158f(0x1e7)](_0x3a158f(0x1e6)[_0x3a158f(0x1d3)]),
      client["user"][_0x3a158f(0x1f0)](_0x3a158f(0x1f7));
    let _0x11319 = await client[_0x3a158f(0x203)]([_0x3a158f(0x1f3)]);
    console[_0x3a158f(0x1e7)](
      _0x3a158f(0x1d0)[_0x3a158f(0x1d3)] +
        "Invite\x20=\x20"[_0x3a158f(0x1d1)] +
        ("" + _0x11319)[_0x3a158f(0x1d3)]
    );
  }),
  client["on"]("guildCreate", (_0x163edb) => {
    const _0x53c856 = _0x56560b;
    console[_0x53c856(0x1e7)](
      "[CONSOLE]\x20Joined\x20"[_0x53c856(0x1d3)] +
        ("" + _0x163edb[_0x53c856(0x1f2)])[_0x53c856(0x1d1)] +
        "."[_0x53c856(0x1d3)]
    );
  }),
  client["on"](_0x56560b(0x1ef), (_0x33efff) => {
    const _0x29b4d3 = _0x56560b;
    console["log"](
      _0x29b4d3(0x1fc)[_0x29b4d3(0x1d3)] +
        ("" + _0x33efff[_0x29b4d3(0x1f2)])[_0x29b4d3(0x1d1)] +
        "."[_0x29b4d3(0x1d3)]
    );
  }),
  client["on"](_0x56560b(0x1d7), async (_0x4444bb) => {
    const _0x443d50 = _0x56560b,
      _0x3967a0 = _0x4444bb["content"]
        [_0x443d50(0x1da)](prefix["length"])
        [_0x443d50(0x1df)](/ +/),
      _0x32cbc4 = _0x3967a0[_0x443d50(0x1f1)]()[_0x443d50(0x1f9)](),
      _0x890bef =
        client[_0x443d50(0x1e8)][_0x443d50(0x1dc)](_0x32cbc4) ||
        client[_0x443d50(0x1e8)][_0x443d50(0x1d5)](
          (_0x587bdd) =>
            _0x587bdd[_0x443d50(0x200)][_0x443d50(0x1fb)] &&
            _0x587bdd[_0x443d50(0x200)][_0x443d50(0x1fb)]["includes"](_0x32cbc4)
        );
    if (!_0x890bef) return;
    if (!_0x4444bb["content"]["toLowerCase"]()[_0x443d50(0x1cf)](prefix))
      return;
    if (_0x4444bb[_0x443d50(0x1e0)]["type"] === "dm")
      return _0x4444bb[_0x443d50(0x1e0)][_0x443d50(0x1ee)](discord);
    _0x890bef[_0x443d50(0x200)][_0x443d50(0x1e9)] &&
      _0x4444bb[_0x443d50(0x202)] &&
      _0x4444bb[_0x443d50(0x1e9)](),
      _0x890bef[_0x443d50(0x1d9)](client, _0x4444bb, _0x3967a0);
  }),
  client[_0x56560b(0x1ea)](token);
