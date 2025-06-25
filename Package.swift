// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "MewaxcorpNfc",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "MewaxcorpNfc",
            targets: ["NfcPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "NfcPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/NfcPluginPlugin"),
        .testTarget(
            name: "NfcPluginPluginTests",
            dependencies: ["NfcPluginPlugin"],
            path: "ios/Tests/NfcPluginPluginTests")
    ]
)