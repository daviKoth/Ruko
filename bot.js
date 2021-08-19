(MPP, Bot) => {
Bot.OnStage(ready, () {
  MPP.Say("We're Online.");
});
Bot.OnStage(message, (MsgBox) => {
  If.Msg("r!help", "rhelp", "@+-help" {
         MPP.Say("Public commands: rhelp, rplay, rstop, rcolor, rtour, rmath.");
         MPP.Say("Admin commands: rjavascript, rtakecrown, rchangename, rnocussing, rkickban.");
  });
});
}
