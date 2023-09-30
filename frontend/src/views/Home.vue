<template>
  <section class="content">
    <ProfileItem
        v-for="profile in profileList"
        :key="profile.url"
        :profile="profile"
    />
	</section>
</template>


<script setup>
import ProfileItem from '../components/profileItem.vue'

// Placeholder profile object
const profileList = [{
  githubUrl: 'https://github.com/Cedricyu',
  nickName: 'Cedricyu',
  timestamp: 1696035663, // Replace with an actual timestamp
  hasGif: true, // Replace with true or false based on whether the profile has a GIF
  previewImageUrl: 'https://example.com/preview-image.jpg', // Replace with the actual URL of the preview image
  height: 300, // Replace with the actual height of the image
}];
</script>


<script>
export default {
  name: "HomePage",
};
</script>

<style>
.content {
	display: flex;
	justify-content: center;
	width: 850px;
	margin: 0 auto;
	padding: 60px 0;
}
</style>
