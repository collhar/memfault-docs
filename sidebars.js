/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    docs: {
        Platform: [
            "platform/memfault-terminology",
            "platform/projects-and-fleets",
            "platform/inspecting-a-device",
            "platform/software-version-hardware-version",
            "platform/jira-integration",
            "platform/user-management",
            "platform/organization-auth-tokens",
            "platform/issue-management",
            "platform/ota",
            "platform/metrics",
            "platform/charts",
            "platform/alerts",
            "platform/rate-limiting",
            /* "platform/bulk-device-upload", */
            /* Mentions features to be released: "platform/sso", */
        ],
        "MCU Guides": [
            "mcu/introduction",
            {
                type: "category",
                label: "Getting Started Guides",
                items: [
                    "mcu/arm-cortex-m-guide",
                    "mcu/nrf-connect-sdk-guide",
                    "mcu/pinnacle-100-guide",
                    "mcu/esp32-guide",
                    "mcu/esp8266-rtos-sdk-guide",
                    "mcu/da1469x-sdk-guide",
                ],
            },
            {
                type: "category",
                label: "Subsystem Guides",
                items: [
                    "mcu/coredumps",
                    "mcu/compact-logs",
                    "mcu/reboot-reason-tracking",
                    "mcu/metrics-api",
                    "mcu/trace-events",
                    "mcu/logging",
                    "mcu/releases-integration-guide",
                    "mcu/symbol-file-build-ids",
                    "mcu/heap-stats",
                ],
            },
            {
                type: "category",
                label: "User Guides",
                items: [
                    "mcu/coredump-elf-with-gdb",
                    "mcu/uploading-data-with-mqtt",
                    "mcu/sdk-submodule",
                ],
            },
            {
                type: "category",
                label: "Design Docs",
                items: [
                    "mcu/data-from-firmware-to-the-cloud",
                    "mcu/event-serialization-overview",
                ],
            },
            {
                type: "category",
                label: "Test Utilities",
                items: [
                    "mcu/test-patterns-for-chunks-endpoint",
                    "mcu/test-data-collection-with-gdb",
                    "mcu/export-chunks-over-console",
                    "mcu/demo-cli",
                ],
            },
        ],
        "Android Guides": [
            "android/introduction",
            "android/android-getting-started-guide",
            "android/android-bort",
            "android/uploading-android-bugreports",
            "android/android-reboot-events",
            "android/custom-events",
            "android/android-builtin-metrics",
            "android/android-custom-metrics",
            "android/android-releases-integration-guide",
            "android/android-ota-update-client",
            "android/android-data-scrubbing",
            "android/android-multi-device-support",
        ],
        "Embedded Linux Guides": [
            "linux/introduction",
            "linux/linux-releases-integration-guide",
        ],
        "Automation, CI & CD": [
            "ci/authentication",
            "ci/install-memfault-cli",
            "ci/add-device-to-cohort-api",
        ],
        Troubleshooting: ["troubleshooting/uploading-symbol-file-is-invalid"],
    },
};
