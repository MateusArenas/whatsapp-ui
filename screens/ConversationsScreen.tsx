import {View, Text, StyleSheet, ScrollView, Button} from "react-native";
import {memo, useEffect, useLayoutEffect, useState} from "react";
import {New} from "../icons";
import ChatItem from "../components/shared/ChatItem";
import { SwipeListView } from 'react-native-swipe-list-view';
import { More, Archive, Message, Pin } from "../icons";
import { IOScrollView, InView } from 'react-native-intersection-observer'


function ConversationsScreen({navigation}) {

    const [editMode, setEditMode] = useState(false)
    const [showTitle, setShowTitle] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                if (editMode)
                    return
                return (
                    <New fill="#007AFF" size={23} style={{marginRight: 15}}/>
                )
            },
            headerLeft: () => {
                return (
                    <View style={{marginLeft: 5}}>
                        <Button onPress={() => setEditMode(!editMode)} title={editMode ? 'Done' : 'Edit'}/>
                    </View>
                )
            },
            headerStyle: {
                backgroundColor: '#F6F6F6',
                shadowOpacity: 0
            },
            headerTitle: () => {
                if (!showTitle)
                    return

                return (
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '600'
                    }}>
                        Conversations
                    </Text>
                )
            }
        });
    }, [editMode, showTitle]);

    const scrollHandle = e => {
        if (e.nativeEvent.contentOffset.y < 33) {
            setShowTitle(false)
        } else {
            setShowTitle(true)
        }
    }

    const chats = [
        {
            id: 1,
            phone: '+905303001965',
            fullName: 'Mateus Arenas',
            avatar: 'https://avatars.githubusercontent.com/u/47995957?v=4',
            notification: 0,
            read: true,
            message: {
                text: `Hey, what's up? 😃`,
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 2,
            phone: '+905303001965',
            fullName: 'Alan silva',
            avatar: 'https://avatars.githubusercontent.com/u/62341715?v=4',
            notification: 3,
            me: true,
            message: {
                text: 'How long bro, how are you?',
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 3,
            phone: '+905303001965',
            fullName: 'Rogerio Arenas',
            avatar: 'https://avatars.githubusercontent.com/u/17189996?v=4',
            notification: 15,
            message: {
                text: 'Hey developer, how are you?',
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 4,
            phone: '+905303001965',
            fullName: 'Mateus Gioio',
            avatar: 'https://avatars.githubusercontent.com/u/47995957?v=4',
            notification: 0,
            read: true,
            message: {
                text: `hahaha that's right 😃`,
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 5,
            phone: '+905303001965',
            fullName: 'Alan Cajé',
            avatar: 'https://avatars.githubusercontent.com/u/62341715?v=4',
            notification: 3,
            me: true,
            message: {
                text: "it's OK?",
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 6,
            phone: '+905303001965',
            fullName: 'Rogerio Torres',
            avatar: 'https://avatars.githubusercontent.com/u/17189996?v=4',
            notification: 15,
            message: {
                text: "Let's code...",
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 7,
            phone: '+905303001965',
            fullName: 'Mateus Arenas Gioio',
            avatar: 'https://avatars.githubusercontent.com/u/47995957?v=4',
            notification: 0,
            read: true,
            message: {
                text: `Good Morning 😃`,
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 8,
            phone: '+905303001965',
            fullName: 'Mateus Arenas',
            avatar: 'https://avatars.githubusercontent.com/u/47995957?v=4',
            notification: 0,
            read: true,
            message: {
                text: `hey how are you? 😃`,
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 9,
            phone: '+905303001965',
            fullName: 'Alan silva',
            avatar: 'https://avatars.githubusercontent.com/u/62341715?v=4',
            notification: 3,
            me: true,
            message: {
                text: 'How long bro, how are you?',
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 10,
            phone: '+905303001965',
            fullName: 'Rogerio Arenas',
            avatar: 'https://avatars.githubusercontent.com/u/17189996?v=4',
            notification: 15,
            message: {
                text: 'Hey developer, how are you?',
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 11,
            phone: '+905303001965',
            fullName: 'Mateus Gioio',
            avatar: 'https://avatars.githubusercontent.com/u/47995957?v=4',
            notification: 0,
            read: true,
            message: {
                text: `lol that's right 😃`,
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 12,
            phone: '+905303001965',
            fullName: 'Alan Cajé',
            avatar: 'https://avatars.githubusercontent.com/u/62341715?v=4',
            notification: 3,
            me: true,
            message: {
                text: "it's OK?",
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 13,
            phone: '+905303001965',
            fullName: 'Rogerio Torres',
            avatar: 'https://avatars.githubusercontent.com/u/17189996?v=4',
            notification: 15,
            message: {
                text: "let's code...",
                date: '2021-12-24 12:14:23'
            }
        },
        {
            id: 14,
            phone: '+905303001965',
            fullName: 'Mateus Arenas Gioio',
            avatar: 'https://avatars.githubusercontent.com/u/47995957?v=4',
            notification: 0,
            read: true,
            message: {
                text: `Good Morning 😃`,
                date: '2021-12-24 12:14:23'
            }
        },
    ]

    return (
        <IOScrollView
            style={styles.container}
            stickyHeaderIndices={[1]}
            bounces={false}
            onScroll={scrollHandle}
            scrollEventThrottle={16}
        >
            <View style={styles.header}>
                <InView onChange={inView => setShowTitle(!inView)}>
                    <Text style={styles.text}>
                        Chats
                    </Text>
                </InView>
            </View>
            <View style={styles.line} />
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.actions}>
                    <Button disabled={editMode} title="Broadcast Lists" />
                    <Button disabled={editMode} title="New Group" />
                </View>
                <SwipeListView 
                    data={chats}
                    renderItem={ (data, rowMap) => <ChatItem chat={data.item} editMode={editMode} />}
                    style={styles.chats}
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={styles.listActions}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{
                                    backgroundColor: '#007AFF',
                                    ...styles.listAction
                                }}>
                                    <Message fill="#fff" size={21} style={{marginBottom: 5}} />
                                    <Text style={styles.listText}>Read</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#C6C6CC',
                                    ...styles.listAction
                                }}>
                                    <Pin fill="#fff" size={21} style={{marginBottom: 5}} />
                                    <Text style={styles.listText}>Pin</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{
                                    backgroundColor: '#C6C6CC',
                                    ...styles.listAction
                                }}>
                                    <More fill="#fff" size={21} style={{marginBottom: 5}} />
                                    <Text style={styles.listText}>More</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#3E70A7',
                                    ...styles.listAction
                                }}>
                                    <Archive fill="#fff" size={21} style={{marginBottom: 5}} />
                                    <Text style={styles.listText}>Archive</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    leftOpenValue={148}
                    rightOpenValue={-148}
                />
            </View>
        </IOScrollView>
    )
}

export default memo(ConversationsScreen)

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#F6F6F6',
        paddingLeft: 10
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    line: {
        backgroundColor: '#A6A6AA',
        height: 0.5,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#A6A6AA',
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    chats: {

    },
    listActions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listAction: {
        width: 74,
        height: 74,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listText: {
        fontSize: 14,
        color: '#fff'
    }
})