<template>
  <div class="download-handlebars">
    <div class="download-links">
      <a :title="uncompressedTitle" class="uncompressed-download" :href="linkPrefix + uncompressedFilename">
        {{ label }}
        <DownloadIcon class="icon" />
      </a>
      <a :title="minifiedTitle" class="minified-download" :href="linkPrefix + minifiedFilename"
        >minified
        <DownloadIcon class="icon" />
      </a>
    </div>
    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import DownloadIcon from "../private-components/DownloadIcon";

export default {
  components: {
    DownloadIcon
  },
  props: {
    runtimeOnly: {
      type: Boolean,
      required: false,
      defaultValue: false
    }
  },
  data() {
    return {};
  },
  computed: {
    uncompressedTitle() {
      return "Download " + this.label;
    },
    minifiedTitle() {
      return "Download minified " + this.label;
    },
    label() {
      return this.$props.runtimeOnly
        ? `Handlebars ${this.version} (runtime only)`
        : `Handlebars ${this.version} (compiler + runtime)`;
    },
    uncompressedFilename() {
      return this.$props.runtimeOnly ? `handlebars.runtime-v${this.version}.js` : `handlebars-v${this.version}.js`;
    },
    minifiedFilename() {
      return this.$props.runtimeOnly
        ? `handlebars.runtime.min-v${this.version}.js`
        : `handlebars.min-v${this.version}.js`;
    },
    linkPrefix() {
      return "https://s3.amazonaws.com/builds.handlebarsjs.com/";
    },
    version() {
      return this.$handlebarsVersions.latest;
    }
  }
};
</script>
<style lang="stylus" scoped>

$downloadLinkPadding = 0.5rem;
$borderRadius = 5px;


.download-handlebars {
  border-radius: $borderRadius
  background-color: lightgray;
  margin-top: 1rem;
  padding: 0.5rem;

}

.download-links {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}

.minified-download, .uncompressed-download {
  text-align: center;
  padding: $downloadLinkPadding 0;
  border-radius: 5px;
}

.uncompressed-download {
  flex: 1 0 20rem;
  background-color: $baseColor;
  color: white;
}

.minified-download {
  flex: 1 1 10rem;
  text-align: center;
}

.description {
  margin-top: -0.5rem;
}

.icon {
  margin-left: 0.25rem;
  width: 0.75rem;
  height: 0.75rem;
}

@media (max-width: $MQMobile) {
  .download-handlebars {
    padding: 0.5rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .download-handlebars {
    margin: 0.5rem -1.5rem;
    border-radius: 0;
  }

}
</style>
