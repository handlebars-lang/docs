<template>
  <div title="Download Handlebars" class="download-handlebars">
    <svg class="icon">
      <path
        d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012
		v-8.861H25.462z"
      />
      <path
        d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
		c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
		c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
		C15.092,18.979,14.62,18.426,14.62,18.426z"
      />
    </svg>
    <div v-if="runtimeOnly" class="download-link">
      <div class="header">Download Handlebars runtime only</div>
      <div>
        <a :href="linkPrefix + filename.runtime.uncompressed">{{ filename.runtime.uncompressed }}</a>
      </div>
      <div>
        <a class="minified" :href="linkPrefix + filename.runtime.minified"
          >{{ filename.runtime.minified }} (minified)</a
        >
      </div>
    </div>
    <div v-else class="download-link">
      <div class="header">Download Handlebars compiler + runtime</div>
      <div>
        <a title="If unsure, use this one." class="first-download" :href="linkPrefix + filename.full.uncompressed">{{
          filename.full.uncompressed
        }}</a>
        (development version)
      </div>
      <div>
        <a class="minified" :href="linkPrefix + filename.full.minified">{{ filename.full.minified }} (minified)</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    runtimeOnly: {
      type: Boolean,
      required: false,
      defaultValue: false
    }
  },
  data() {
    const version = this.$handlebarsVersions.latest;
    return {
      version: version,
      linkPrefix: "https://s3.amazonaws.com/builds.handlebarsjs.com/",
      filename: {
        full: {
          uncompressed: `handlebars-v${version}.js`,
          minified: `handlebars.min-v${version}.js`
        },
        runtime: {
          uncompressed: `handlebars.runtime-v${version}.js`,
          minified: `handlebars.runtime.min-v${version}.js`
        }
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
    .download-handlebars {
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: left;
        align-items: center;

    }
@media (max-width: $MQNarrow) {
    .icon {
        display: none;
    }
}
    .icon {
        width: 2em;
        height: 2em;
        margin: 1em;

        path {
            stroke: gray;
            fill: gray;
        }
    }

    .download-link {
        display: block;
        line-height: 150%;
        margin: 0.5em;

        a {
            font-weight: normal;
        }

        a.first-download {
            font-weight: bold;
            border: 1px solid $baseColor;
            border-radius: 5px;
            padding: 4px;
            margin: -5px;
            margin-right: 0px;
        }

    }

    .header {
        color: $textColor;
        font-weight: bold;
        font-size: 80%;
    }

    .minified {
        font-size: 80%;
    }
</style>
