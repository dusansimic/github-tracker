<template>
  <div>
    <div class="phone-viewpoer">
      <md-bottom-bar class="md-primary" md-type="shift" md-sync-route>
        <md-bottom-bar-item to="/issues" id="bottom-bar-item-issues" md-label="Issues" md-icon="./../assets/git-merge.svg">
          <i class="md-icon md-icon-font md-bottom-bar-icon md-theme-default customIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
          </i>
          <span class="md-bottom-bar-label">Issues</span>
        </md-bottom-bar-item>
        <md-bottom-bar-item to="/pulls" id="bottom-bar-item-pulls" md-label="Pulls" md-icon="./../assets/git-pull-request.svg">
          <i class="md-icon md-icon-font md-bottom-bar-icon md-theme-default customIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          </i>
          <span class="md-bottom-bar-label">Pulls</span>
        </md-bottom-bar-item>
        <!-- <md-bottom-bar-item to="/favourites" id="bottom-bar-item-favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item> -->
        <md-bottom-bar-item to="/profile" id="bottom-bar-item-profile" md-label="Profile" md-icon="person"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar'
}
</script>

<style lang="scss" scoped>
.phone-viewport {
  width: 322px;
  height: 200px;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, .26);
  background: rgba(#000, .06);
}
.customIcon {
  color: var(--md-theme-default-icon-on-background, rgba(0,0,0,0.54));
  fill: currentColor;
}
</style>
