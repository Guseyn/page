'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { ReadDataByPath, ReadDataFromFiles, ReadFilesOfDirectoryRecursively, WrittenFile } = require('@cuties/fs');
const ConcatenatedData = require('./ConcatenatedData');
const LoggedWrittenPageBundleJsFile = require('./LoggedWrittenPageBundleJsFile');

class OnPageStaticJsFilesChangeEvent extends AsyncObject {

  constructor(pageStaticJsFilesDirectory, pageBundleJsFile) {
    super(pageStaticJsFilesDirectory, pageBundleJsFile);
  }

  definedSyncCall() {
    return (pageStaticJsFilesDirectory, pageBundleJsFile) => {
      return (eventType, fileName) => {
        if (eventType === 'change') {
          new LoggedWrittenPageBundleJsFile(
            new WrittenFile(
              pageBundleJsFile,
              new ConcatenatedData(
                new ReadDataFromFiles(
                  new ReadFilesOfDirectoryRecursively(
                    pageStaticJsFilesDirectory
                  )
                )
              )
            )
          ).call();
        }
      }
    }
  }

}

module.exports = OnPageStaticJsFilesChangeEvent;
