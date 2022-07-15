BUILD_NUMBER=$RANDOM
PROJECT_NAME=click-counter

BUILD_IMAGE_NAME="${PROJECT_NAME}-build"
BUILD_IMAGE="${BUILD_IMAGE_NAME}:${BUILD_NUMBER}"

docker build . \
    --file ./pipelines/Build.Dockerfile \
    --tag $BUILD_IMAGE


PUBLISH_IMAGE_NAME="${PROJECT_NAME}-publish"
PUBLISH_IMAGE="${PUBLISH_IMAGE_NAME}:${BUILD_NUMBER}"

docker build . \
    --file ./pipelines/Publish.Dockerfile \
    --build-arg BASE_IMAGE=$BUILD_IMAGE \
    --tag $PUBLISH_IMAGE


docker run \
    --rm \
    --detach \
    --publish 8080:80 \
    --name $PROJECT_NAME \
    $PUBLISH_IMAGE
